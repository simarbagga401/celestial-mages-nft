<template>
	<section>
		<Nav @toogleMenuState="toogleMenuState" />
		<Menu v-show="isMenuOpen" />

		<section v-show="!isMenuOpen" id="main">
			<About />
			<Footer />
		</section>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: false,
		}
	},
	methods: {
		toogleMenuState(bool) {
			this.isMenuOpen = bool
		},
	},
}
</script>
