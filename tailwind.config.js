/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("postcss-preset-env")({
			stage: 1,
			features: {
				"nesting-rules": true,
				"custom-properties": {
					warnings: false,
				},
			},
		}),
	],
};

