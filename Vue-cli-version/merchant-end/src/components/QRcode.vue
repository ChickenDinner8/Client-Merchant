<style scoped>

</style>


<template>
	<Content :style="{padding: '0 16px 16px'}">
  	<Breadcrumb :style="{margin: '16px 0'}">
    	<BreadcrumbItem>主页</BreadcrumbItem>
    	<BreadcrumbItem>定制餐桌二维码</BreadcrumbItem>
    </Breadcrumb>
  	<Card>
      <div style="height: 1000px">
      	<div id="qrcode"></div>
		<Input v-model="tableid" placeholder="请输入餐桌号" clearable style="width: 200px"></Input>
		<Button type="ghost" shape="circle" v-on:click="generate_qrcode">确定</Button>
      </div>
  	</Card>
  </Content>

	

</template>

<script>
	import QRCode from 'qrcodejs2'
	export default {
		data() {
			return {
				tableid:'',
				qrcode:''
			}
		},
		methods: {
			UpdateCode() {
				var obj = {
					restaurantId:4,
					tableId:this.tableid
				};

				this.qrcode.makeCode(JSON.stringify(obj));
					
				
				
				console.log(qrcode);
			},
			generate_qrcode() {
				this.UpdateCode();
				this.tableid='';
			}
		},
		mounted() {
			this.qrcode = new QRCode('qrcode', {
				width:100,
				height:100,
				text:'default'
			});
		}
	}
</script>