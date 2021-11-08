<template>
	<section>
		<Nav @toogleMenu="toogleMenu" />

		<div v-show="!menuIsOpen">
			<About />
			<!-- <Footer /> -->
		</div>
		<div v-show="menuIsOpen">menu is open!</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			menuIsOpen: false,
		}
	},
	methods: {
		toogleMenu(bool) {
			this.menuIsOpen = bool
		},
	},
}
</script>
