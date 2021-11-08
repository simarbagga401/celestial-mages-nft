<template>
	<div id="card">
		<p>{{ title }}</p>
		<input type="number" placeholder="min1 - max6" />

		<div id="button-container">
			<button id="btn1" class="btn">Connect Wallet</button>
			<button id="btn2" class="btn">Mint!</button>
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
@import "../assets/styles/components/MintCard.css";
</style>
