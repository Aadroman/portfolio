<script>
export default {
	props: ['contacts'],
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="text-left max-w-xl px-6">
			<h2
				class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"
			>
				Mes coordonnées
			</h2>
			<ul class="font-general-regular">
				<li class="flex" v-for="contact in contacts" :key="contact.id">
					<i
						:data-feather="contact.icon"
						class="w-5 text-gray-500 dark:text-gray-400 mr-4"
					></i>
					<a
						v-if="contact.icon === 'mail'"
						:href="'mailto:' + contact.name"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
						aria-label="Email"
					>
						{{ contact.name }}
					</a>
					<a
						v-else-if="contact.icon === 'phone'"
						:href="'tel:' + contact.name"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
						aria-label="Phone"
					>
						{{ contact.name }}
					</a>
					<a
						v-else-if="contact.icon === 'linkedin'"
						:href="contact.name"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
						aria-label="LinkedIn"
						target="_blank"
					>
						Rubén Longèque
					</a>
					<a
						v-else-if="contact.icon === 'github'"
						:href="contact.name"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
						aria-label="Github"
						target="_blank"
					>
						rlongeque
					</a>
					<a
						v-else
						href="#"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
					>
						{{ contact.name }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
