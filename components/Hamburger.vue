<template>
	<section id="hamburger">
		<div class="HamburgerContainer" :class="BurgerFunction">
			<div class="Hamburger"></div>
		</div>
	</section>
</template>

<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ["hamburgerOpen"],
	computed: {
		BurgerFunction() {
			return {
				open: this.hamburgerOpen,
			}
		},
	},
}
</script>

<style scoped>
.HamburgerContainer {
	width: 35px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.Hamburger {
	width: 25px;
	height: 3px;
	background: var(--primary-black);
	border-radius: 20%;
	transition: all 0.2s ease-in-out;
}
.Hamburger::before,
.Hamburger::after {
	position: absolute;
	content: "";
	width: 30px;
	height: 3px;
	background: black;
	border-radius: 20%;
	transition: all 0.5s ease-in-out;
}
.Hamburger::before {
	transform: translateY(-7px);
}
.Hamburger::after {
	transform: translateY(7px);
}
.HamburgerContainer.open .Hamburger {
	transform: translateX(-5px);
	background: none;
}
.HamburgerContainer.open .Hamburger::before {
	transform: rotate(45deg);
}
.HamburgerContainer.open .Hamburger::after {
	transform: rotate(-45deg);
}
</style>
