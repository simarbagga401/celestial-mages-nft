export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Celestial Mages",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content:
					"Pixel NFTs going to the moon! 100 unique Pixel Modern Art NFT art pieces (including total 20 animated art pieces) ",
			},
			{ property: "og:title", content: "Celestial Mages" },
			{
				property: "og:description",
				content:
					"Pixel NFTs going to the moon! 100 unique Pixel Modern Art NFT art pieces (including total 20 animated art pieces) ",
			},
			{
				property: "og:image",
				content: "../assets/icons/stamp.svg",
			},
			{
				property: "og:url",
				content: "https://celestial-mages.netlify.com",
			},
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/styles/main.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
