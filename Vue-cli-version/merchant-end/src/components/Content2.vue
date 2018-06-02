<style scoped>
	#pages {
		position: absolute;
		bottom: 0px;
		right: 0px;
		margin-right: 3%;
		margin-bottom: 3%;
	}
	#addbutton {
		margin-right: auto;
		margin-left:auto;
		width: 90%;
		height: 40px;
		font-size: 20px;
		color: #80848f
	}
</style>


<template>
	<Content :style="{padding: '0 16px 16px'}">
  	<Breadcrumb :style="{margin: '16px 0'}">
    	<BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
    </Breadcrumb>
  	<Card>
    	<div style="height: 1000px">
			<h2 style="color: #80848f">菜单</h2>
			<br></br>
			<Button id="addbutton" v-on:click="modal = true" type="dashed" icon="plus">添加</Button>
			<Modal width=720 v-model="modal" @on-ok="addNewDish" >
				<h2 slot="header">添加菜品</h2>
				<Addwindow v-on:AddNewDish="Refresh"></Addwindow>
			</Modal>
		    <Dish v-for="(dish, index) in dishes"
		      	v-bind:key="dish.id"
		      	v-bind:dishname="dish.name"
		      	v-bind:description="dish.des"
		      	v-bind:price="dish.price"
		      	v-on:remove="dishes.splice(index,1)"
		      	style="width:90%">
		    </Dish>
      	</div>
      	<div id="pages">
			<Page :total="100" show-elevator show-sizer ></Page>
		</div>
  	</Card>
  </Content>
</template>

<script>
	import Dish from '@/components/Dish'
	import Addwindow from '@/components/Addwindow'
	export default {
		data() {
			return {
				newname:'',
				newdes:'',
				newprice:'',
				modal: false,
				dishes: [
					{
						id:1,
						name:'dish1',
						des:'description',
						price:'113',
					},
					{
						id:2,
						name:'dish2',
						des:'description2',
						price:'112',
					},
					{
						id:3,
						name:'dish3',
						des:'description3',
						price:'111'
					}
				],
				newid:4
			}
		},
		components: {
			Dish,
			Addwindow
		},
		methods: {
			addNewDish() {

				this.dishes.push({
					id:this.newid++,
					name:this.newname,
					des:this.newdes,
					price:this.newprice
				});
				this.newname='';
				this.newdes= '';
				this.newprice = '';
			},
			Refresh(data) {
				this.newname = data.EditedName;
				this.newdes = data.EditedDescription;
				this.newprice = data.EditedPrice;
			}
		}
	}
</script>