<template>
	<div class="chart-comm">
	</div>
</template>

<script>
import echarts from 'echarts'
import dataNest from '@/utils/nest'
import common from '@/utils/common'
import {mapActions} from 'vuex'
export default {
	name: 'ployline',
	data() {
		return {
			_chart: ''
		}
	},

	watch: {
		vdata: function(newVal, oldVal){
			this.createPolylineChart();
		}
	},

	methods: {
		createPolylineChart(){
			let that = this;
			var key = 'date';
			let nest = dataNest()
				.key(function(d) {
					return d[key];
				})
				.entries(this.vdata);
			if(this._chart){
				this._chart.setOption({
					series: [{
			        	data: nest,
			        }],
			        xAxis: {
			        type: 'category',
			        //axisLine: {onZero: false},
			        data: (function(){
			            	var result = nest.map(n => n.name);
			            	return result;
			            }()).sort(function(a, b){return (+a.slice(0, -1)) - (+b.slice(0, -1))})
			    	},
				})
				return;
			}
			let ec = echarts.init(this.$el);
			let option = {
				title: {
					text:'医院就诊人数变化',
				},
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: {
			        type: 'category',
			        //axisLine: {onZero: false},
			        data: (function(){
			            	var result = nest.map(n => n.name);
			            	return result;
			            }()).sort(function(a, b){return (+a.slice(0, -1)) - (+b.slice(0, -1))})
			    },
			    yAxis: {
	        		type: 'value',
	        		min: 0,
	        		position: 'left',
	        		axisLabel: {
		            	formatter: '{value}'
		            }
		    	},
			    series: [
			        {
			            id: 'a',
			            type: 'line',
			            smooth: true,
			            symbolSize: 20,
			            data: (function(){
			            	var result = nest.map(n => n.value);
			            	return result;
			            }())
			        }
			    ]
			}
			ec.setOption(option);
			ec.on('click', function(param){
				that.filterValue({
					key, 
					name:param['name']
				});
			})
			this._chart = ec;
		},
		...mapActions([
			'filterValue'
		])
	},
	computed: {
		vdata: function(){
			return this.$store.state.data.data;
		}
	},
	mounted() {

	}
}
</script>

<style lang="less" scoped>

</style>