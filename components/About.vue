<template>
	<section id="about-section">
		<div id="links-container">
			<ul>
				<li v-for="(icon, i) in icons" :key="i">
					<a :href="icon.link">
						<img class="icon" :src="icon.src" alt="" />
					</a>
				</li>
			</ul>
		</div>

		<div id="heading-container">
			<h1 class="shadow-font heading">Celestial Mages</h1>
		</div>

		<div id="content">
			<h2 class="outline-font sub-heading">NFT Collection</h2>
			<p class="description-font">
				100 unique Pixel Modern Art NFT art pieces <br />(including total 20
				animated art pieces)
			</p>
			<MintCard :title="mintcardtitle" />
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
			mintcardtitle:
				"Enter the amount of celestial mages you would like to buy!",
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
		}
	},
}
</script>

<style scoped>
@import "../assets/styles/components/About.css";
</style>
