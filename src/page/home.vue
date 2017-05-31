<template>
	<div>
		<HeaderItem></HeaderItem>
		<div class="content row">
			<div class="col-md-4">
				<PolylineItem></PolylineItem>
			</div>
			<div class="col-md-4">
				<PieItem></PieItem>
			</div>
			<div class="col-md-4">
				<PolylineArea></PolylineArea>
			</div>
		</div>
		<FooterItem></FooterItem>
	</div>
</template>

<script>
import HeaderItem from '@/components/header'	
import FooterItem from '@/components/footer'
import PolylineItem from '@/components/polyline'
import PieItem from '@/components/pie'
import PolylineArea from '@/components/polylineArea'

export default {
	name: 'home',
	components: {
		HeaderItem,
		FooterItem,
		PolylineItem,
		PieItem,
		PolylineArea
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