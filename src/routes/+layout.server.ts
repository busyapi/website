export function load({ setHeaders }) {
	setHeaders({
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'SAMEORIGIN',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'
	});
}
