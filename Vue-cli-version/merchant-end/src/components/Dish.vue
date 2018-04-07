<style scoped>
	.dishes {
			margin: 5%;
			width: 80%;
}
</style>

<template>
	<Card :bordered="false" class="dishes">
		<p slot="title">{{dishname}}</p>
		<p>{{description}}</p>
		<br></br>
		<Button v-on:click="$emit('remove')">delete</Button>
	</Card>
</template>

<script>
	export default {
		props: ['dishname', 'description']
	}
</script>