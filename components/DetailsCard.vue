<template>
	<div id="details-card">
		<div v-if="isStampVisible" id="stamp-container">
			<img id="stamp" src="../assets/icons/stamp.png" alt="" />
		</div>

		<div class="content">
			<h2 class="shadow-font">{{ title }}</h2>
			<p v-if="isDescriptionVisible" class="description-font">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ["title", "description", "isStampVisible", "isDescriptionVisible"],
}
</script>

<style scoped>
@import "../assets/styles/components/DetailsCard.css";
</style>
