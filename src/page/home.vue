<template>
	<div>
		<HeaderItem></HeaderItem>
		<div class="content row">
			<div class="col-md-12">
				<ChooseBar></ChooseBar>
			</div>
			<div class="col-md-4">
				<PolylineItem></PolylineItem>
			</div>
			<div class="col-md-4">
				<PieItem></PieItem>
			</div>
			<div class="col-md-4">
				<BarItem></BarItem>
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
import BarItem from '@/components/bar'
import ChooseBar from '@/components/chooseBar'
import patientApi from '@/api/patient'
import { SET_DATA } from '@/store/mutation-types'

export default {
	name: 'home',
	components: {
		HeaderItem,
		FooterItem,
		ChooseBar,
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