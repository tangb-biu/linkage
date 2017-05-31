<template>
	<div>
		<HeaderItem></HeaderItem>
		<div class="content row">
			<div class="col-md-4">
				<PolyLineItem></PolyLineItem>
			</div>
			<div class="col-md-4"></div>
			<div class="col-md-4"></div>
		</div>
		<FooterItem></FooterItem>
	</div>
</template>

<script>
import HeaderItem from '@/components/header'	
import FooterItem from '@/components/footer'
import PolyLineItem from '@/components/polyline'

export default {
	name: 'home',
	components: {
		HeaderItem,
		FooterItem,
		PolyLineItem
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
.row {
	margin: 0;
}
</style>