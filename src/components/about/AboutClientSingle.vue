<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div>
		<img
			:src="client.img"
			:alt="client.title"
			class="flex justify-center items-center w-100 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-2 cursor-pointer dark:bg-secondary-light"
		/>
		<p class="font-medium text-base text-primary-dark dark:text-primary-light">
			{{ client.title }}
		</p>
	</div>
</template>

<style lang="scss" scoped></style>
