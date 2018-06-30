<style scoped>

</style>


<template>
	<div id="qrcode"></div>
</template>

<script>
	import QRCode from 'qrcodejs2'
	export default {
		methods: {
			qrcode() {
				let  qrcode = new QRCode('qrcode', {
					width:100,
					height:100,
					text:'test',
					image:''
				});
				console.log(qrcode);
			}
		},
		mounted () {
			this.qrcode();
		}
	}
</script>