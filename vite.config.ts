import react from '@vitejs/plugin-react-swc'
import path from 'path';
import {visualizer} from 'rollup-plugin-visualizer';
import { UserConfig } from 'vite';

// https://vitejs.dev/config/

const componentAdaption = 'adaption/adaptor-';

export enum RunMode {
  h5 = 'h5',
  pc = 'pc'
}

export function getAdaptionList(mode: RunMode){
  return {
      '@adaption-adaptor' : resolvePath( componentAdaption +  mode),
  }
}

export function getEntryJs(mode: RunMode){
  return resolvePath(`main-${mode}.tsx`);
}

function resolvePath( filePath: string){
  return path.resolve(__dirname, `src/${filePath}`);
}

const h5Component = 'src/adaption/adaptor-h5';
const pcComponent = 'src/adaption/adaptor-pc';
/**
 * 可以转换构建时的路径引用
 * @param mode 
 * @param code 
 * @returns 
 */
const transformJSEntry = (mode: RunMode, code: string)  => {
  let path = getEntryJs(mode);
  return code.replace(/\$___MAIN_JS_ENTRY__/g, `<script type="module" src="${path}"></script>`);
}

export default (opt: unknown):UserConfig => {
  console.info(opt);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { mode } = opt as { mode : RunMode};
  const isH5 = mode === 'h5';
  const component = isH5 ? h5Component : pcComponent;

  console.info(mode, {...getAdaptionList(mode)});

  const config : UserConfig =   {
    resolve: {
      alias: {
           ...getAdaptionList(mode),
          '@adaption-adaptor': path.resolve(__dirname, component),
          '~antd-mobile': path.resolve(__dirname,'node_modules/antd-mobile')
      }
    },
    plugins: [
      react(),
      {
        name: 'html-transform',
        enforce: 'pre',
        transformIndexHtml(code) {
          // for dev runtime to replace the entry script flag
          return  transformJSEntry(mode, code)
        },
      },
      {
        name: 'the resource file using',
        enforce: 'pre',
        transform(code: string, id:string){
          if(id.indexOf('/src/') > -1 || id.endsWith('.html')){
             console.info('应用资源引用路径：',id);
          }
          // for building the chunk to replace the entry script flag
          if(id.endsWith('.html')){
            return {code : transformJSEntry(mode, code), map: null}
          }
        }
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
        less:{
          math: 'always'
        }
      }
    }
  }

  console.info('vite-config', config);

  return config;
}
