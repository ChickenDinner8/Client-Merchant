<style scoped>

</style>


<template>
	<div id="qrcode"></div>
</template>

<script>
	export default {
		data() {

		},
		methods: {
			qrcode() {
				let  qrcode = new QRCode('qrcode', {
					wideth:100,
					height:100,
					
				})
			}
		}
	}
</script>