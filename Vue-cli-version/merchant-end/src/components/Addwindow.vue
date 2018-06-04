<style>

</style>
<template>
	<div>
		<Row span="24">
		<Col span="8">
			<div id="photo"></div>

		</Col>
		<Col span="16">
			<div>
				<p style="float: left">菜品名称</p>
				<Input placeholder="请输入菜名..." :autofocus="true" @on-change="DeliverData" v-model="srcdishname"></Input>
			</div>
			<p style="float: left">菜品描述</p>
			<Input placeholder="请输入描述..." :autofocus="true" @on-change="DeliverData" v-model="srcdescription" type="textarea" :rows="5" ></Input>
			<p>定价</p>
			<Input placeholder="请输入..." :autofocus="true" @on-change="DeliverData" v-model="srcdishprice"></Input>
		</Col>

		</Row>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['srcdishname', 'srcdescription', 'srcdishprice'],
		methods: {
			DeliverData() {
				let data = {
					EditedName: this.srcdishname,
					EditedDescription: this.srcdescription,
					EditedPrice: this.srcdishprice
				};
				this.$emit('AddNewDish', data);
			}
		}
	}
</script>