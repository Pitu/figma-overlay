import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: tag => tag.includes('figma-overlay')
				}
			}
		})
	],
	build: {
		lib: {
			entry: './src/main.ce.ts',
			name: 'figma-overlay',
			// the proper extensions will be added
			fileName: 'figma-overlay'
		}
	},
	define: {
		'process.env': process.env
	}
});
