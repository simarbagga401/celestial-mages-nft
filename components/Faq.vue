<template>
	<section id="faq-section">
		<div id="content">
			<h2 class="outline-font sub-heading">Faq</h2>

			<DetailsCard
				:title="faqs[0].question"
				:description="faqs[0].answer"
				:is-stamp-visible="false"
				:is-description-visible="true"
			/>
			<DetailsCard
				:title="faqs[1].question"
				:description="faqs[1].answer"
				:is-stamp-visible="false"
				:is-description-visible="true"
			/>
			<DetailsCard
				:title="faqs[2].question"
				:description="faqs[2].answer"
				:is-stamp-visible="false"
				:is-description-visible="true"
			/>
			<DetailsCard
				:title="faqs[3].question"
				:description="faqs[3].answer"
				:is-stamp-visible="false"
				:is-description-visible="true"
			/>
		</div>

		<div id="image-container">
			<img class="mage-frame" src="../assets/images/mage-frame-2.png" alt="" />
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			faqs: [
				{
					question: "What is NFT?",
					answer:
						"NFT stands for Non-Fungible Token. An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. ",
				},
				{
					question: "Why polygon and BSC?",
					answer:
						"NFT stands for Non-Fungible Token. An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. ",
				},
				{
					question: "Where is the Contract?",
					answer:
						"NFT stands for Non-Fungible Token. An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. ",
				},
				{
					question: "Why 100?",
					answer:
						"NFT stands for Non-Fungible Token. An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. ",
				},
			],
		}
	},
}
</script>

<style scoped>
@import "../assets/styles/components/Faq.css";
</style>
