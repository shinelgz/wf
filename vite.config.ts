import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { UserConfig } from 'vite';

// https://vitejs.dev/config/

export enum RunMode {
  h5 = 'h5',
  pc = 'pc'
}
// 隔离的目录
const isolateList = ['components', 'handlers', 'routes', 'hooks'];

export function resolveIsolateList(mode: RunMode) {
  const aliasMap = {};
  isolateList.forEach(type => aliasMap[`@adapter/${type}`] = resolvePath(`isolate/${type}/${mode}`))
  return aliasMap;

}

export function getEntryJs(mode: RunMode) {
  return resolvePath(`main-${mode}.tsx`);
}

function resolvePath(filePath: string) {
  return path.resolve(__dirname, `src/${filePath}`);
}
/**
 * 可以转换构建时的路径引用
 * @param mode 
 * @param code 
 * @returns 
 */
const transformJSEntry = (mode: RunMode, code: string) => {
  let path = getEntryJs(mode);
  return code
    .replace(/\$___MAIN_JS_ENTRY__/g, path)
    .replace(/\$__PRO_RUN_MODE__/g, mode)

}

export default (opt: unknown): UserConfig => {
  console.info(opt);

  const { mode } = opt as { mode: RunMode };

  const config: UserConfig = {
    resolve: {
      alias: {
        ...resolveIsolateList(mode),
        '~antd-mobile': path.resolve(__dirname, 'node_modules/antd-mobile'),
        '~ssc-ui-react': path.resolve(__dirname, 'node_modules/ssc-ui-react'),
      }
    },
    plugins: [
      react(), {
        name: 'html-transform',
        enforce: 'pre',
        transformIndexHtml(code) {
          // for dev runtime to replace the entry script flag
          return transformJSEntry(mode, code)
        },
      }, {
        name: 'the resource file using',
        enforce: 'pre',
        transform(code: string, id: string) {
          if (id.indexOf('/src/') > -1 || id.endsWith('.html')) {
            console.info('应用资源引用路径：', id);
          }
          // for building the chunk to replace the entry script flag
          if (id.endsWith('.html')) {
            return { code: transformJSEntry(mode, code), map: null }
          }
        }
      },
      visualizer({
        emitFile: false,
        filename: 'visualize.html',
        // open: true
      })
    ],
    base: './',
    build: {
      outDir: 'dist/' + mode,
      rollupOptions: {
        output: {
          assetFileNames() {
            return `assets/[name].[hash].[ext]`;
          },
          entryFileNames: `assets/[name].[hash].js`,
        },
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          math: 'always'
        }
      }
    },
    server: {
      // 多模式同时运行化，固定端口
      port: mode === RunMode.h5 ? 5174 : 5173
    }

  }

  // console.info('vite-config', config);       

  return config;
}
