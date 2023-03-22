/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "415px",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
				"2xl": "1600px",
				"3xl": "1920px",
			},
			colors: {
				black: "#000A11",
				green: "#43E2A0",
			},
		},
	},
	plugins: [],
};
