<template>
	<div class="chart-comm">
	</div>
</template>

<script>
import echarts from 'echarts'
import dataNest from '@/utils/nest'
import common from '@/utils/common'

export default {
	name: 'ployline',
	data() {
		return {

		}
	},

	watch: {
		vdata: function(newVal, oldVal){
			this.createPolylineChart();
		}
	},

	methods: {
		createPolylineChart(){
			let nest = dataNest()
				.key(function(d) {
					return d.date;
				})
				.entries(this.vdata.data);
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
			        data: (function(){let arr = [];for(let i=1; i<=12; i++){arr.push(i+'月')} return arr;}())
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
		}
	},
	computed: {
		vdata: function(){
			return this.$store.state.data;
		}
	},
	mounted() {

	}
}
</script>

<style lang="less" scoped>

</style>