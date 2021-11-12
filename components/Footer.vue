<template>
	<footer>
		<div id="icon-container">
			<li v-for="(icon, i) in icons" :key="i">
				<a :href="icon.link">
					<img class="footer-icons" :src="icon.src" alt="" />
				</a>
			</li>
		</div>
		<p>@2021 Celestial Mages</p>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			icons: [
				{
					src: require("../assets/icons/opensea_icon.svg"),
					link: "https://opensea.io/collection/celestial-mages",
				},
				{
					src: require("../assets/icons/twitter_icon.svg"),
					link: "https://twitter.com/PIXELSboisNFT",
				},
				{
					src: require("../assets/icons/discord_icon.svg"),
					link: "#",
				},
			],
		}
	},
}
</script>

<style scoped>
@import "../assets/styles/components/Footer.css";
</style>
