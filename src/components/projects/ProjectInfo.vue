<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">

			<!-- Single project objectives -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.objectivesHeading }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ projectInfo.objectivesDetails }}
				</p>
			</div>

			<!-- Single project client details -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in projectInfo.companyInfos"
						:key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light"
					>
						<span>{{ info.title }}: </span>
						<a
							href="#"
							:class="
								info.title == 'Site web' || info.title == 'Tel'
									? 'hover:underline cursor-pointer'
									: ''
							"
							aria-label="Project Website and Phone"
							>{{ info.details }}</a
						>
					</li>
				</ul>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.technologies[0].title }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ projectInfo.technologies[0].techs.join(', ') }}
				</p>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in projectInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				{{ projectInfo.projectDetailsHeading }}
			</p>
			<p
				v-for="projectDetail in projectInfo.projectDetails"
				:key="projectDetail.id"
				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>
				{{ projectDetail.details }}
			</p>

			<!-- <div class="flex justify-center sm:block">
				<a
					download="Ruben_Longeque_rapport_de_stage_RGU.pdf"
					href="/files/Ruben_Longeque_rapport_de_stage_RGU.pdf"
					class="flex justify-center items-center w-60 sm:w-60 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Rapport de stage</span
					></a
				>
			</div> -->

		</div>

	</div>
</template>
