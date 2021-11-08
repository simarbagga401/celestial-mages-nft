<template>
	<nav>
		<img id="logo" src="../assets/icons/logo.svg" alt="" />

		<section v-if="!mobile" id="links">
			<ul>
				<li v-for="(link, i) in links" :key="i">
					<a :href="link.link">{{ link.name }}</a>
				</li>
			</ul>
		</section>

		<section v-else>
			<Hamburger :hamburger-open="isMenuOpen" @click.native="toogleMenu" />
		</section>
	</nav>
</template>

<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	data() {
		return {
			isMenuOpen: false,
			links: [
				{
					name: "About",
					link: "#About",
				},
				{
					name: "Mint",
					link: "#Mint",
				},
				{
					name: "Roadmap",
					link: "#Roadmap",
				},
				{
					name: "Faq",
					link: "#Faq",
				},
				{
					name: "Team",
					link: "#Team",
				},
			],
		}
	},
	computed: {
		mobile() {
			return window.innerWidth < 600
		},
	},
	methods: {
		toogleMenu() {
			this.isMenuOpen = !this.isMenuOpen
			this.$emit("toogleMenuState", this.isMenuOpen)
		},
	},
}
</script>

<style scoped>
@import "../assets/styles/components/Nav.css";
</style>
