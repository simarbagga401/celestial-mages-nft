<template>
	<section id="menu">
		<ul>
			<li v-for="(link, i) in links" :key="i">
				<a :href="link.link">{{ link.name }}</a>
			</li>
		</ul>

		<div id="icon-container">
			<ul>
				<li v-for="(icon, i) in icons" :key="i">
					<a :href="icon.link">
						<img :src="icon.src" alt="" />
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			icons: [
				{
					src: require("../assets/icons/opensea_icon.svg"),
					link: "https://twitter/pixelnbois",
				},
				{
					src: require("../assets/icons/twitter_icon.svg"),
					link: "https://twitter/pixelNBOis",
				},
				{
					src: require("../assets/icons/discord_icon.svg"),
					link: "https://twitter/pixelNBOis",
				},
			],
			links: [
				{
					name: "About",
					link: "#About",
				},
				{
					name: "Mint",
					link: "#Mint",
				},
				{
					name: "Roadmap",
					link: "#Roadmap",
				},
				{
					name: "Faq",
					link: "#Faq",
				},
				{
					name: "Team",
					link: "#Team",
				},
			],
		}
	},
}
</script>

<style scoped>
@import "../assets/styles/components/Menu.css";

img {
	width: 30px;
}
</style>
