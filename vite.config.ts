import {fileURLToPath} from 'node:url';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';

const path=(relative:string)=>fileURLToPath(new URL(relative,import.meta.url));
const base=process.env.GITHUB_ACTIONS === 'true' ? '/human-atlas/' : '/';

export default defineConfig({
  base,
  root:path('./web'),
  publicDir:path('./public'),
  plugins:[react()],
  resolve:{alias:{'@':path('./')}},
  css:{postcss:{plugins:[tailwindcss()]}},
  server:{watch:{usePolling:true}},
  build:{outDir:path('./dist'),emptyOutDir:true}
});
