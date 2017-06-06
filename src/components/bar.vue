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
	name: 'bar',

	data(){
		return {
			_chart: '',
		}
	},

	watch: {
		vdata() {
			this.createBarChart();
		}
	},

	methods: {
		createBarChart() {
			let that = this;
			var key1 = 'date';
			var key2 = 'register';
			let nest = dataNest()
				.key((d) => {
					return d[key1];
				})
				.key((d) => {
					return d[key2];
				})
				.entries(this.vdata);
			nest.sort(function(a, b){return (+a['key'].slice(0, -1)) - (+b['key'].slice(0, -1))});
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
				            }())
			    	},
				})
				return;
			}
			let ec = echarts.init(this.$el);
			let option = {
				title: {
					text: '病人来源'
				},
			    color: ['#5793f3', '#d14a61'],

			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross'
			        }
			    },
			    legend: {
			        data:['农村','城市']
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: (function(){
				            	var result = nest.map(n => n.name);
				            	return result;
				            }()).sort(function(a, b){return (+a.slice(0, -1)) - (+b.slice(0, -1))})
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            //min: 0,
			            //max: 250,
			            position: 'left',
			            axisLine: {
			                lineStyle: {
			                    color: '#5793f3'
			                }
			            },
			            axisLabel: {
			                formatter: '{value}'
			            }
			        }
			    ],
			    series: [
			        {
			            name:'农村',
			            type:'bar',
			            data: nest.map((ele) => {
			            	return ele['values'][0]['values'].length;
			            })
			        },
			        {
			            name:'城市',
			            type:'bar',
			            data: nest.map((ele) =>{
			            	return ele['values'][1]['values'].length;
			            })
			        }
			    ]
			};
			ec.setOption(option);
			this._chart = ec;
		},
		...mapActions([
			'filterValue'
		])

	},

	computed: {
		vdata() {
			return this.$store.state.data.data;
		}
	},

	mounted(){
		
	}
}

</script>

<style lang="less" scoped>
	
</style>