<template>
	<Input placeholder="请输入菜名..." :autofocus="true" @on-change="DeliverData" v-model="srcdishname"></Input>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['srcdishname', 'srcdes'],
		methods: {
			DeliverData() {
				let data = {
					EditedName: this.srcdishname
				};
				this.$emit('UpdateDish', data);
				this.srcdishname = '';
			}
		}
	}
</script>