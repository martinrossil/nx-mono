import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

export default defineConfig({
	input: [
		'./src/Central.ts',
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
			port: 10000,
		}),
		livereload(),
	],
	output: {
		file: './development/central.js',
		format: 'esm',
		sourcemap: 'inline',
	},
});
