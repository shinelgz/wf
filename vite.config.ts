import react from '@vitejs/plugin-react-swc'
import path from 'path';
import {visualizer} from 'rollup-plugin-visualizer';
//import { defineConfig } from 'vite';

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * 常量定义
 */
const h5Component = 'src/adaption/adaptor.h5';
const pcComponent = 'src/adaption/adaptor';
const h5EntryJS = 'src/main-h5.tsx';
const pcEntryJS = 'src/main-pc.tsx';
const h5Entry = 'index.h5.html';
const PCEntry = 'index.pc.html';
/**
 * 可以转换构建时的路径引用
 * @param mode 
 * @param code 
 * @returns 
 */
const transformJSEntry = (mode: string, code: string)  => {
  let path = '';
  switch(mode){
    case 'h5' : 
    path = h5EntryJS;
    break;
    path = pcEntryJS;
    case 'pc' : 
    break;
  }
  return code.replace(/__ENTRY__/, path);
}

export default (opt: unknown) => {
  console.info(opt);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { mode } = opt as any;
  const isH5 = mode === 'h5';
  const entry = isH5 ? h5Entry: PCEntry;
  const component = isH5 ? h5Component : pcComponent;

  console.info(entry, component);

  return {
    resolve: {
      alias: {
          '@adaption-adaptor': path.resolve(__dirname, component),
          '~antd-mobile': path.resolve(__dirname,'node_modules/antd-mobile')
      }
    },
    plugins: [
      react(),
      {
        name: 'the file using',
        enforce: true,
        transform(code: string, id:string){
          if(id.indexOf('/src/') > -1 || id.endsWith('.html')){
             console.info('应用资源引用路径：',id);
          }
        }
      },
      {
        name : 'replace js entry by platform',
        enforce : true,
        transform(code: string, id: string){
          if(id.endsWith('.html')){
            return { code : transformJSEntry(mode, code), map: null}
          }
        },
        transformJSEntry,
      },
      visualizer({
        emitFile: false,
        filename: 'visualize.html',
        // open: true
      })
    ],
    base : './',
    build: {
      outDir : 'dist/' + mode,
      rollupOptions : {
       input : {
         [mode]: path.resolve(__dirname, entry)
       },
        output: {
          assetFileNames() {
            return `assets/[name].[hash].[ext]`;  
          },
          entryFileNames: `assets/[name].[hash].js`,
        }
      }
    },
    css: {
      preprocessorOptions: {
        less:{
          math: 'always'
        }
      }
    }
  }
}
