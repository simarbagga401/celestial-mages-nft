<template>
	<section id="roadmap-section">
		<div id="image-container">
			<img src="../assets/images/mage-frame1.svg" alt="" />
		</div>

		<div id="content">
			<h2 class="outline-font sub-heading">Road Map</h2>

			<DetailsCard
				:title="details[0].title"
				:description="details[0].description"
				:is-stamp-visible="true"
				:is-description-visible="true"
			/>
			<DetailsCard
				:title="details[1].title"
				:description="details[1].description"
				:is-stamp-visible="true"
				:is-description-visible="true"
			/>
			<DetailsCard
				:title="details[2].title"
				:description="details[2].description"
				:is-stamp-visible="true"
				:is-description-visible="true"
			/>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			details: [
				{
					title: "Initialize",
					description:
						"Smart contract created with pre-minted Art Pieces viewable on marketplaces.",
				},
				{
					title: "50% Sold",
					description:
						"Launch Picatar NFT and verify the smart contract coding.",
				},
				{
					title: "100% Sold",
					description:
						"Utilize 10 ETH to run massive advertising campaigns to promote Picatar NFT.",
				},
			],
		}
	},
}
</script>

<style Teamscoped>
@import "../assets/styles/components/Roadmap.css";
</style>
