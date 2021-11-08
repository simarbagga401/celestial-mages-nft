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
			<div id="menu" @click="toogleMenu()">click me!</div>
		</section>
	</nav>
</template>

<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	data() {
		return {
			menuIsOpen: false,
			counter: 0,
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
			console.log("menu toggles")
			this.menuIsOpen = !this.menuIsOpen
			this.$emit("toogleMenu", this.menuIsOpen)
		},
	},
}
</script>

<style scoped>
@import "../assets/styles/components/Nav.css";
</style>
