<template>
	<section id="menu">
		<ul>
			<li v-for="(link, i) in links" :key="i">
				<a :href="link.link">{{ link.name }}</a>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
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
}
</script>

<style scoped>
@import "../assets/styles/components/Menu.css";
</style>
