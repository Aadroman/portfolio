<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Quelques langages que j\'ai pu apprendre',
			clients: [
				{
					id: 1,
					title: 'HTML',
					img: require('@/assets/images/langages/icons8-html-5-100.png'),
				},
				{
					id: 2,
					title: 'CSS',
					img: require('@/assets/images/langages/icons8-css3-100.png'),
				},
				{
					id: 3,
					title: 'PHP',
					img: require('@/assets/images/langages/icons8-php-100.png'),
				},
				{
					id: 4,
					title: 'Symfony',
					img: require('@/assets/images/langages/icons8-symfony-100.png'),
				},
				{
					id: 5,
					title: 'SQL',
					img: require('@/assets/images/langages/icons8-sql-100.png'),
				},
				{
					id: 6,
					title: 'Java',
					img: require('@/assets/images/langages/icons8-java-100.png'),
				},
				{
					id: 7,
					title: 'Python',
					img: require('@/assets/images/langages/icons8-python-100.png'),
				},
				{
					id: 8,
					title: 'Angular',
					img: require('@/assets/images/langages/icons8-angularjs-100.png'),
				},
				{
					id: 9,
					title: 'Javascript',
					img: require('@/assets/images/langages/icons8-js-100.png'),
				},
				{
					id: 10,
					title: 'Typescript',
					img: require('@/assets/images/langages/icons8-ts-100.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 mx-auto">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-5 mt-10 sm:mt-14 gap-2 place-items-center justify-items-center">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
