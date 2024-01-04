import typescript from 'rollup-plugin-typescript2';
import terser from "@rollup/plugin-terser";

function config({plugins = [], output = {}}) {
  return {
    input: 'src/index.ts',
    plugins: [
      typescript({tsconfigOverride: {compilerOptions: {module: 'ES2015'}}}),
        ...plugins
    ],
    output: {
      ...output,
    },
    external: []
  };
}

export default [
  config({
    output: {
      format: 'umd',
      name: 'isoToLanguage',
      file: 'lib/umd/isoToLanguage.js'
    }
  }),
  config({
    plugins: [
      terser({
        mangle: true,
        compress: true,
        output: {
          beautify: false,
          comments: false,
          inline_script: true,
        },
      }),
    ],
    output: {
      format: 'umd',
      name: 'isoToLanguage',
      file: 'lib/umd/isoToLanguage.min.js'
    }
  }),
  config({
    output: {
      format: 'cjs',
      dir: 'lib/cjs/',
      preserveModules: true,
      entryFileNames: '[name].cjs',
      sourcemap: true
    }
  }),
  config({
    output: {
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
      entryFileNames: '[name].mjs',
      dir: 'lib/esm/'
    }
  })
];
