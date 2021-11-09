<template>
	<section>
		<Nav @toogleMenuState="toogleMenuState" />
		<Menu v-show="isMenuOpen" />

		<section v-show="!isMenuOpen" id="main">
			<About />
			<Team />
			<!-- <Footer /> -->
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

<style scoped>
/* section#main {
	background: hsl(0, 100%, 66%);
	width: 100vw;
	height: 100vh;
} */
</style>
