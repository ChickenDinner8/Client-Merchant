<style scoped>
	.dishes {
			margin-top: 1%;
			margin-bottom: 1%;
			margin-left: 5%;
			margin-right: 5%;
			width: 80%;
	}
	p {
		font-size: 20px;
		color: #80848f;
	}
	#buttongroup {
		margin-top: -50px;
		margin-right: 10px;
	}
	#photo-list {
		width: 80px;
		height: 80px;
		background-color: #bbbec4;
		margin-left: auto;
		margin-right: auto;
	}
</style>

<template>
	<Card :bordered="false" class="dishes" >
		<Row>
			<Col span="4">
				<div id="photo-list"></div>
			</Col>
			<Col span="8">
				<p>{{dishname}}</p>
				<p>{{description}}</p>
			</Col>
			<Col span="3">
				<p>价格：</p>
				<p>{{price}}</p>
			</Col>
			<Col span="3">
				<p>月销量：</p>
				<p>{{price}}</p>
			</Col>

		</Row>
		<ButtonGroup style="float: right" id="buttongroup">
					<Button type="primary" v-on:click="modal1 = true">修改</Button>
					<Button v-on:click="$emit('remove')">删除</Button>
					<Modal width=700 v-model="modal1" @on-ok="ok" @on-cancel="cancel">
						<h2 slot="header">添加菜品</h2>
						<Editwindow v-bind:srcdescription="this.description" 
									v-bind:srcdishname="this.dishname"
									v-bind:srcdishprice="this.price"
									v-on:UpdateDish="Refresh"
									></Editwindow>
					</Modal>
					<Modal v-model="modal2">
						<Input></Input>
					</Modal>
				</ButtonGroup>
		<hr style="margin-top: 20px" />
		
		
	</Card>
</template>

<script>
	import Editwindow from '@/components/Editwindow'

	export default {
		data() {
			return {
				modal1: false,
				modal2: false,
				tempname: '',
				tempdescription: '',
				tempprice: '',
				change: false
			}
		},
		methods: {
			ok() {
				if (this.change == true) {
					this.dishname = this.tempname;
					this.description = this.tempdescription;
					this.price = this.tempprice;
				}
				this.change = false;
			},
			cancel() {
			},
			Refresh(data) {
				this.tempname = data.EditedName;
				this.tempdescription = data.EditedDescription;
				this.tempprice = data.EditedPrice;
				this.change = true;
			}
		},
		props: ['dishname', 'description', 'price', 'dishid'],
		components: {
			Editwindow
		}
	}
</script>