<template>
	<div id="card">
		<p>{{ title }}</p>
		<div class="img-container">
			<img src="../assets/icons/logo.svg" alt="" />
		</div>

		<div id="button-container">
			<a
				id="btn2"
				href="https://opensea.io/collection/celestial-mages"
				class="btn"
				>Mint!</a
			>
		</div>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ["title"],
}
</script>

<style scoped>
@import "../assets/styles/components/MintCard2.css";
</style>
