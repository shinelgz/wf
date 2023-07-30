import react from '@vitejs/plugin-react-swc'
import path from 'path';
import {visualizer} from 'rollup-plugin-visualizer';
//import { defineConfig } from 'vite';

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const h5Component = 'src/components/adaptor.h5';
const pcComponent = 'src/components/adaptor';

export default (opt: unknown) => {
  console.info(opt);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { mode } = opt as any;
  const isH5 = mode === 'h5';
  const entry = isH5 ? 'index.h5.html' : 'index.html';
  const component = isH5 ? h5Component : pcComponent;

  console.info(entry, component);

  return {
    resolve: {
      alias: {
          '@component-adaptor':   path.resolve(__dirname, component),
      }
    },
    plugins: [react(),
      visualizer({
        emitFile: false,
        filename: 'visualize.html',
        // open: true
      })
    ],
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
    }
  }
}
