import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

export default defineConfig({
	input: [
		'./src/index.ts',
	],
	plugins: [
		resolve(),
		esbuild({
            sourceMap: true
        }),
		serve({
			contentBase: 'development',
			open: true,
			historyApiFallback: true,
			port: 10001,
		}),
		livereload(),
	],
	output: {
		file: './development/html.js',
		format: 'esm',
		sourcemap: 'inline',
	},
});
