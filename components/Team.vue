<template>
	<section id="team-section">
		<div id="image-container">
			<img src="../assets/images/me2.svg" alt="" />
		</div>

		<div id="content">
			<h2 class="outline-font sub-heading">Team</h2>

			<p class="description-font">
				100 unique Pixel Modern Art NFT art pieces <br />(including total 20
				animated art pieces). Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Fugit error iusto quia ab possimus fuga aut sequi
				architecto! Ea perspiciatis repellendus mollitia esse veritatis tempora
				nobis dolore aliquam quos laborum?
			</p>

			<MintCard2 :title="mintcardtitle" />
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			mintcardtitle: "Mint Celestial Mages From Opensea!",
		}
	},
}
</script>

<style scoped>
@import "../assets/styles/components/Team.css";
</style>
