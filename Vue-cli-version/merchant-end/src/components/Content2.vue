<style scoped>
	#pages {
		position: absolute;
		bottom: 0px;
		right: 0px;
		margin-right: 3%;
		margin-bottom: 3%;
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
					<h2>菜单</h2>
					<Input v-model="newname" placeholder="name" style="width:150px"></Input>
					<br></br>
					<Input v-model="newdes" type="textarea" :rows="3" placeholder="description" style="width: 300px"></Input>
					<Button v-on:click="addNewDish">添加</Button>
      		<Dish v-for="(dish, index) in dishes"
      					v-bind:key="dish.id"
      					v-bind:dishname="dish.name"
      					v-bind:discription="dish.des"
      					v-on:remove="dishes.splice(index,1)">
      		</Dish>
      </div>
      <div id="pages">
					<Page total="100" show-elevator show-sizer ></Page>
			</div>
  	</Card>
  </Content>
</template>

<script>
	import Dish from '@/components/Dish'

	export default {
		data() {
			return {
				newname:'',
				newdes:'',
				dishes: [
					{
						id:1,
						name:'dish1',
						des:'description1',
					},
					{
						id:2,
						name:'dish2',
						des:'description2',
					},
					{
						id:3,
						name:'dish3',
						des:'description3'
					}
				],
				newid:4
			}
		},
		components: {
			Dish
		},
		methods: {
			addNewDish: function() {
				this.dishes.push({
					id:this.newid++,
					name:this.newname,
					des:this.newdes
				});
				this.newname='';
				this.newdes;
			}
		}
	}
</script>