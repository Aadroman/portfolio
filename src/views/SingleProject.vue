<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
//import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projectsData from '../data/projects.js';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		//ProjectRelatedProjects,
	},
	data() {

		const projectId = this.$route.params.id;
		const project = projectsData.find((project) => project.id === parseInt(projectId));

		if (project) {
			return {
			singleProjectHeader: {
				singleProjectTitle: project.title,
				singleProjectDate: project.date,	
				singleProjectTag: project.tag,
			},
			projectImages: project.images.map((image) => ({
				id: image.id,
				title: image.title,
				img: image.img,
			})),
			projectInfo: {
				clientHeading: 'A propos du client',
				companyInfos: [
					{
						id: 1,
						title: 'Nom',
						details: project.client.name,
					},
					{
						id: 2,
						title: 'Services',
						details: project.client.services,
					},
					{
						id: 3,
						title: 'Site web',
						details: project.client.website,
					},
					{
						id: 4,
						title: 'Tel',
						details: project.client.phone,
					},
				],
				objectivesHeading: 'Objectif',
				objectivesDetails: project.objectives,
				technologies: [
					{
						title: 'Outils & Technologies',
						techs: project.technologies,
					},
				],
				projectDetailsHeading: 'Présentation du projet',
				projectDetails: project.challenge.map((detail, index) => ({
					id: index + 1,
					details: detail,
				})),
				socialSharingsHeading: 'Plus de détails',
				socialSharings: project.socialSharings.map((social) => ({
					id: social.id,
					name: social.name,
					icon: social.icon,
					url: social.url,
				})),
			},
		};

	}
		
	},
	mounted() {
		feather.replace();
		// Récupérer l'ID du projet depuis les paramètres de l'URL
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
