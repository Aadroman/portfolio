<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio: `
					Je suis actuellement en 3ème année en Informatique à l'IUT de Blagnac. J'ai choisi la spécialité "Développement d'applications". Je suis actuellement sur la fin de ma formation initiale, et je souhaite par la suite m'intégrer dans le monde de l'entreprise. 
					`,
				},
				{
					id: 2,
					bio: `
					Dans le cadre de mes études, j’ai pu développer des compétences concernant le développement d’application, le développement web fullstack, l’IoT, la gestion et administration de base de donnée, le management, la communication.

					J'ai acquis des compétences techniques tout en respectant les délais et les consignes.
					`,
				},
				{
					id: 3,
					bio: `
					J'ai contribué à différents projets, durant mes études, comme la création d'une interface graphique pour afficher des données de bases de données polystore, ainsi que la création d'un site d'e-commerce, et d'une application web pour une bibliothèque, m'occupant de la partie Back-end, Back-office principalement. Ces expériences m'ont permis de développer des compétences techniques et de travailler efficacement en équipe.

					De plus j'ai pu réaliser un stage à l'étranger, durant ma deuxième année, en Ecosse, ce qui m'a permis d'améliorer ma capacité à être proactif, ainsi que ma maîtrise de l'anglais  .
					`,
				},
			],



		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/pp_linkedin.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
