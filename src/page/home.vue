<template>
	<div>
		<headerItem></headerItem>
		<footerItem></footerItem>
	</div>
</template>

<script>
import headerItem from '@/components/header'	
import footerItem from '@/components/footer'

export default {
	name: 'home',
	components: {
		headerItem,
		footerItem
	},
	data: function () {
		return {

		}
	},
	created() {

	},
	methods:{
		
	},
	computed: {
		
	}
}
</script>

<style lang="less" scoped>


</style>