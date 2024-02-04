<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'https://www.linkedin.com/in/thompsonvictor',
					icon: 'linkedin',
				},
				{
					id: 2,
					name: 'https://github.com/VictorThompsonKeyl',
					icon: 'github',
				},
				{
					id: 3,
					name: 'victor.thompson@etu.univ-tlse2.fr',
					icon: 'mail',
				},
				{
					id: 4,
					name: '+33 7 80 42 91 18',
					icon: 'phone',
				},
			],
		};
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
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
