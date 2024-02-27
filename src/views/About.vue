<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<AboutCounter />

	</div>
</template>

<style scoped></style>
