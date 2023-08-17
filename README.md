# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



============

## 目标
解决这个问题，我们的目标就是一次研发能够适应两端的用户使用，这使得我们要做到：
实现一套代码一次研发，够能适应两端的运行环境，一是从纵向上，组件（业务组件）能够复用，二是从横向上，组件的交互流程标准化。
交互设计上要标准规范化，达得到两端的表现有，尽量减少各端的差异化。（设计样例）
注：本文档主要对 第一个目标进行详述；原理来说，该方案适应了 N 库类集成
研发模式的改变：
![image](https://github.com/shinelgz/wf/blob/master/public/3.png)

## 方案实现
### 总体设计
![image](https://github.com/shinelgz/wf/blob/master/public/1.png)
代码设计模式

* 整体架构的目标实现端侧组件的物理分离，所以整理架构跟目前的研发模式没有太大的差异，但这里在业务逻辑层引入了 Application 层的概念，
* 这里主要是借鉴了 “六边形架构”中的Application层其中之一，即做为页面业务逻辑与适配层的统一依赖，即 adapter 层的组件及接口只由 application 向外部 export，对下层组件或接口的组合。
* 六边形架构属于DDD研发架构，但这里为什么不引诱其他层做法，主要是不想对原有架构影响太大，另一个 DDD 的研发架构 对于 这类业务系统的作用并不是太多，反而会带来更大的代码复杂性。

### 职责及边界设定
分层	职责	调用链方向
* 框架路由层	
>> 只负责端侧的差异，抽像配置，比如  vite 的配置，定义隔离层的路由， main entry 等等，
可分不同的模式，进行差异运行及构建逻辑的实现，比如针对 h5 模式的离线包构建
调用链路只能向下一层
可以注入一些必要的全环境变量，逻辑等等

* 业务逻辑层	
>> pages 层	
只负责页面逻辑，不负责端侧差异化的逻辑，也不能现出差异化的逻辑，确保各端的逻辑是一致的。
>> Service	与 BFF 数据通讯层，各端保持无差异化逻辑	
调用链路只能向下
可调用 Application 层的组件，不可跨越

* Application 层	接口组件统一收口，组合成页面需要的组件或接口	为Adapter的收口，向下调用
>> 适配层	主要实现了端侧差异的逻辑实现，对外提供的组件，接口协议必须保持各端的一致性，把差异性隐藏在内部。	调用链路可向下或向上一层
基础组件库	只各端侧的基础组件，对于共用组件，要确保对上层端侧组件依赖的纯洁性	不可跨端组件库依赖，否则影响代码构建产物


### 隔离带
隔离带，这里指将 PC及H5 的差异资源从物理上隔离开来，达到在打包时，PC 的资源包不会包含 H5 的资源包，反则也是。
隔离带对开发者是透明的，它是在 vite 运行时 生成的。原理是通过 vite 的 路径别名实现。
那Adapter起什么作用呢？它负责将与外设交互的数据（包括命令、query）转化为Application可以理解的信息（业务module）,并通过内部系统提供的接口进行业务逻辑的处理。
物理隔离，可以选择文件级或目录级来实现，为了方便在研发过程对隔离区文件的引用 ，这里直接采用目录，指定目录即可以确定调用哪个端侧的文件，而目录又可以统一，方便在框架层配置化实现。

### 差异域
在业务逻辑的每一个层中都可能存在端侧的差异，包括 route,  component, store, hook，这些差异点需要在 adapter 层去定义实现。
难点：需要将功能抽象出来，将功能实现分解成 相同点 + 差异点，而差异点又可以同相同点，并需要控制好适当的差异粒度
以下面这个例子来说

case: 点击页面的查看更多按钮的交互
1.分析	PC 端	H5端	
差异点	本页面弹窗查看： Modal	新 webview 查看: navigate	
相同点	数据内容一致: List 页面	2.交互表现
3.代码实现	H5 端	PC 端

case: 点击页面的查看更多按钮的交互
1.分析	PC 端	H5端	
差异点	全展示	少两个展示字段	
相同点	表格列表展示	2.交互表现
3.代码实现	H5 端	PC 端
![image](https://github.com/shinelgz/wf/blob/master/public/2.png)
## 研发模式
运行模式
为了实现两者的运行完成独立，启动服务时用指明 --mode = h5|pc ，用独立的服务进程，当时在代码运行时，差异化的代码完成分离。
```js
// pnpm run dev:h5
http://127.0.0.1:5173
// pnpm run dev:pc
http://127.0.0.1:5174
```
## 构建模式
构建资源包，与运行模式类似，通过 指时  --mode = h5|pc  分别构建指标的代码包，代码物理隔离，互不干扰，同时可以 h5 资源包做离线包构建。
```js
pnpm run build:h5
pnpm run build:pc
```

## 方案的影响
对比分别针对两个端侧分别开发的方案，
该方案在前期（差异化沉淀不充足的情况下），工作量会比分别开发双端大，因为需要做差异化的抽像，但比一套代码兼容双端的工作量小，因为代码逻辑没有一套代码的复杂（物理隔离代替了逻辑中的隔离）。
在差异化沉淀充足的情况下，后期的研发效率应该会极大提高，主要利益于代码和组件的复杂，接口无差别复用等因素。

