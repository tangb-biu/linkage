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
			<div class="col-md-4">
				<BarItem></BarItem>
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
import BarItem from '@/components/bar'
import patientApi from '@/api/patient'
import { SET_DATA } from '@/store/mutation-types'

export default {
	name: 'home',
	components: {
		HeaderItem,
		FooterItem,
		PolylineItem,
		PieItem,
		PolylineArea,
		BarItem
	},
	data: function () {
		return {

		}
	},
	created() {

	},
	methods:{
		
	},
	computed:{
		
	},
	mounted(){
		let that = this;
		patientApi.getPatients( data => {
			console.log(data)
			that.$store.commit(SET_DATA, data);
		});
	}
}
</script>

<style lang="less" scoped>
.row {
	margin: 0;
}
.content{
	margin-top: 70px;
}
</style>