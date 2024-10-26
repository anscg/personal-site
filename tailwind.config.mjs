/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				popupfromdownwards: {
					'0%': { opacity: 0, transform: 'translateY(70%)', filter: 'blur(40px)' },
					'100%': { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
				}
			},
			animation: {
				'popupd1': 'popupfromdownwards 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 2s forwards',
				'popupd2': 'popupfromdownwards 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 2.1s forwards',
			}
		},
	},
	plugins: [],
}
