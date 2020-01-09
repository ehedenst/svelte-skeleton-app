import fs from 'fs';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const serveOptions = {
  contentBase: './public',
  open: false,
  host: 'localhost',
  port: 5000
};

if (fs.existsSync('.https.key') && fs.existsSync('.https.crt')) {
  serveOptions['https'] = {
    key: fs.readFileSync('.https.key'),
    cert: fs.readFileSync('.https.crt')
  };
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ postcss: true }),
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('public/build/bundle.css');
      }
    }),

    babel({ extensions: ['.js', '.mjs', '.html', '.svelte'] }),

    // If you have external dependencies installed from
    // yarn, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),

    // Serve your rolled up bundle like webpack-dev-server
    !production && serve(serveOptions),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (yarn build
    // instead of yarn serve), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
