<template>
	<section id="about-section">
		<div id="links-container">
			<ul>
				<li v-for="(icon, i) in icons" :key="i">
					<a :href="icon.link">
						<img :src="icon.src" alt="" />
					</a>
				</li>
			</ul>
		</div>

		<div id="content">
			<h1 class="shadow-font">Celestial Mages</h1>
			<h2 class="outline-font">NFT Collection</h2>
			<p class="description-font">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
				culpa.
			</p>
			<MintCard :title="mintCardTitle" />
		</div>

		<div id="image-container">
			<img src="../assets/images/red_mage.svg" alt="" />
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			mintCardTitle:
				"Enter the amount of Celestial Mages you would like to buy!",
			icons: [
				{
					src: require("../assets/icons/opensea_icon.svg"),
					link: "https://twitter/pixelNBOis",
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
		}
	},
}
</script>

<style scoped>
@import "../assets/styles/components/About.css";
</style>
