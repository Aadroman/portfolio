<script>
import counter from 'vue3-autocounter';
import Chart from 'chart.js/auto';
export default {
	components: {
		counter,
	},
	data: () => {
		return {
			experienceTitle: 'Années d\'expériences',
			projectsTitle: 'Projets completés',
			
			// Ajoutez des données pour les compétences front-end et back-end
			frontEndSkills: {
				labels: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
				data: [90, 80, 85, 80, 65], // Notez que ce sont des exemples, utilisez vos propres valeurs
			},
			backEndSkills: {
				labels: ['PHP', 'Symfony', 'Java', 'SQL', 'Python'],
				data: [70, 80, 75, 60, 70], // Notez que ce sont des exemples, utilisez vos propres valeurs
			},
		};
	},
	mounted() {
		this.createChart('frontEndChart', this.frontEndSkills);
		this.createChart('backEndChart', this.backEndSkills);
},
methods: {
    handleCounterFinished() {
      console.log('Counting finished!');
    },
    createChart(chartId, { labels, data }, chartTitle) {
		const ctx = this.$refs[chartId].getContext('2d');
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: chartTitle,
					data: data,
					borderWidth: 2,
					backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
					borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
				}],
			},
			options: {
				indexAxis: 'y',
				scales: {
					x: {
						stacked: true, 
						grid: {
							display: false, // Ne pas afficher la grille sur l'axe des x
						},
					},
					y: {
						stacked: true, 
						grid: {
							display: false, // Ne pas afficher la grille sur l'axe des y
						},
					},
				},
				elements: {
					bar: {
						borderWidth: 2,
						borderRadius: 5, // Ajustez cette valeur pour arrondir les bords
					},
				},
				responsive: true,
				plugins: {
					legend: {
						position: 'top',
						display : false,
					},
					title: {
						display: true,
						text: chartTitle,
					},
				},
			},
		});
    },
},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div
			class="font-general-regular container mx-auto py-10 block sm:flex sm:justify-between sm:items-center"
		>
			<!-- Years of experience counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="3"
					:duration="1"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="About Status Counter"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ experienceTitle }}
				</span>
			</div>

			<!-- Front-end skills chart -->
			<div class="mb-2 sm:mb-0">
				<canvas ref="frontEndChart" width="300" height="200"></canvas>
				<span class="block text-md text-ternary-dark dark:text-ternary-light">Compétences en Front-end</span>
			</div>

			<!-- Back-end skills chart -->
			<div class="mb-2 sm:mb-0">
				<canvas ref="backEndChart" width="300" height="200"></canvas>
				<span class="block text-md text-ternary-dark dark:text-ternary-light">Compétences en Back-end</span>
			</div>

			<!-- Projects completed counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="10"
					:duration="1"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ projectsTitle }}
				</span>
			</div>
		</div>
	</div>
</template>
