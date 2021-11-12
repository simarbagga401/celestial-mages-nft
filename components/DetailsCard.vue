<template>
	<div id="details-card">
		<div id="stamp-container">
			<img id="stamp" src="../assets/icons/stamp.svg" alt="" />
		</div>

		<div class="content">
			<h2 class="shadow-font">{{ title }}</h2>
			<p class="description-font">{{ description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ["title", "description", "isStampVisible"],
}
</script>

<style scoped>
@import "../assets/styles/components/DetailsCard.css";
</style>
