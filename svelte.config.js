//import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		csp: {
			directives: {
				'script-src': ['self', 'https://*.googletagmanager.com', 'nonce-gtag'],
				'style-src': ['self', 'https://fonts.googleapis.com'],
				'img-src': ['self', 'https://*.google-analytics.com', 'https://*.googletagmanager.com'],
				'connect-src': [
					'self',
					'https://*.google-analytics.com',
					'https://*.analytics.google.com',
					'https://*.googletagmanager.com'
				]
			}
		}
	}
};

export default config;
