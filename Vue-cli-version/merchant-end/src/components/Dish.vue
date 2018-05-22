<style scoped>
	.dishes {
			margin-top: 1%;
			margin-bottom: 1%;
			margin-left: 5%;
			margin-right: 5%;
			width: 80%;
}

	#buttongroup {
		margin-top: -30px;
		margin-right: 10px;
	}
</style>

<template>
	<Card :bordered="false" class="dishes">
		<p slot="title">{{dishname}}</p>
		<p>{{description}}</p>
		<br></br>
		<ButtonGroup style="float: right" id="buttongroup">
			<Button type="primary" v-on:click="modal1 = true">修改</Button>
			<Button v-on:click="$emit('remove')">删除</Button>
			<Modal v-model="modal1" @on-ok="ok" @on-cancel="cancel">
				<Editwindow v-bind:srcdishname="this.dishname"v-on:UpdateDish="Refresh"></Editwindow>
			</Modal>
			<Modal v-model="modal2">
				<Input></Input>
			</Modal>
		</ButtonGroup>
		
	</Card>
</template>

<script>
	import Editwindow from '@/components/Editwindow'

	export default {
		data() {
			return {
				modal1: false,
				modal2: false,
				tempname: ''
			}
		},
		methods: {
			ok() {
				this.dishname = this.tempname;
			},
			cancel() {
				console.log('cancel');
			},
			Refresh(data) {
				this.tempname = data.EditedName;
				console.log('OK');
			}
		},
		props: ['dishname', 'description'],
		components: {
			Editwindow
		}
	}
</script>