<template>
	<div class="chart-comm">
	</div>
</template>

<script>
import echarts from 'echarts'
import dataNest from '@/utils/nest'
import mapState from 'vuex'
import common from '@/utils/common'
import {FILTER_VALUE} from '@/store/mutation-types'
import {mapActions} from 'vuex'
export default {
	name: 'pie',

	data () {

		return {
			_chart: ''
		}
	},

	methods: {
		createPieChart() {
			let that = this;
			let key = 'hospital';
			let nest = dataNest()
				.key(function(d) {
					return d[key];
				})
				.entries(this.vdata);
			if(this.$data._chart){
				this.$data._chart.setOption({
					series: [{
			        	data: nest,
			        }]
				})
				return;
			}
			let ec = echarts.init(this.$el);
			let option = {
				title:{
					text: '医院就诊情况'
				},
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    series: [{
			        name: '医院就诊情况',
			        type: 'pie',
			        radius: '68%',
			        center: ['50%', '60%'],
			        clockwise: false,
			        data: nest,
			        label: {
			            normal: {
			            	formatter: "{b}: {d}%",
			            	show: true,
			                textStyle: {
			                    color: '#999',
			                    fontSize: '14px',
			                }
			            }
			        },
			        labelLine: {
			            normal: {
			                show: true
			            }
			        },
			        itemStyle: {
			            normal: {
			                borderWidth: 4,
			                borderColor: '#ffffff',
			            },
			            emphasis: {
			                borderWidth: 0,
			                shadowBlur: 10,
			                shadowOffsetX: 0,
			                shadowColor: 'rgba(0, 0, 0, 0.5)'
			            }
			        }
			    }],
			    color: [
			        '#00acee',
			        '#52cdd5',
			        '#79d9f1',
			        '#a7e7ff',
			        '#c8efff'
			    ]
			};
			ec.setOption(option);
			ec.on('click', function(param){
				that.filterValue({
					key,
					name: param['name']
				});
			});
			this.$data._chart = ec;
		},
		changeData() {

		},
		...mapActions([
			'filterValue'
		])
		
	},

	computed: {
		vdata(){
			return this.$store.state.data.data;
		}
	},

	mounted() {
		
	},

	watch :{
		vdata: function(){
			this.createPieChart();
		}
	}
}

</script>

<style lang="less" scoped>
	
</style>