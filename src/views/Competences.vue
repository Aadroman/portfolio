<script>
import CompetencesChart from '@/components/competences/CompetencesChart';
import CompetencesLanguage from '../components/competences/CompetencesLanguage.vue';
import feather from 'feather-icons';

export default {
	name: 'Competences',
	components: {
		CompetencesChart,
        CompetencesLanguage,
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
		<!-- <div class="container mx-auto">
			<AboutMe />
		</div> -->

		<!-- About counter -->
		<!-- <AboutCounter /> -->

		<!-- Competences languague -->
		<div class="container mx-auto">
			<CompetencesLanguage />
		</div>

		<!-- Competences chart -->
		<div class="container mx-auto">
			<CompetencesChart />
		</div>
	</div>
</template>

<style scoped></style>