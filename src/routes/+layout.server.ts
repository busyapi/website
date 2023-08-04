export function load({ setHeaders }) {
	setHeaders({
		'Content-Security-Policy':
			"script-src 'self' https://*.googletagmanager.com nonce-gtag; style-src 'self' https://fonts.googleapis.com; img-src 'self' https://*.google-analytics.com https://*.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'SAMEORIGIN',
		'Referrer-Policy': 'strict-origin-when-cross-origin'
	});
}
