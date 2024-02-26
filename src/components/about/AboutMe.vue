<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio: `
					Je suis actuellement en 3ème année en Informatique à l'IUT de Blagnac. J'ai choisi la spécialité "Développement d'applications". En ce moment, je travaille en alternance dans une agence web à Lille, où j'ai participé à des projets avec Symfony notamment, afin de automatiser et simplifier le processus d'achat et de création de site web pour les clients. 
					`,
				},
				{
					id: 2,
					bio: `
					Dans le cadre de mes études, l'un de mes projets a été la création d'une application pour gérer les vacataires de notre établissement.

					J'ai acquis des compétences techniques tout en respectant les délais et les consignes. Mon expérience professionnelle m'a appris à être proactif et à maîtriser l'anglais.
					`,
				},
				{
					id: 3,
					bio: `
					Lors de ma 2ème année à l'IUT de Blagnac, j'ai contribué à différents projets, comme la création d'une base de données, d'un site web, et d'une interface utilisateur. Ces expériences m'ont permis de développer des compétences techniques et de travailler efficacement en équipe.

					En dehors de mes études, j'ai effectué un stage de photographie de deux semaines, ce qui m'a aidé à résoudre des problèmes et à renforcer mes compétences en travail d'équipe.
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
