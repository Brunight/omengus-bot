import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['api/v1/src/**/*.ts'],
  sourcemap: true,
  clean: true,
  format: 'cjs',
  platform: 'node',
	bundle: false,
  outDir: 'api/v1/dist',
  // minify: true,
});
