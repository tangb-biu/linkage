<template>
	<div class="chart-comm">
	</div>
</template>

<script>
import echarts from 'echarts'

export default {
	name: 'bar',

	data(){
		return {

		}
	},

	methods: {

	},

	computed: {

	},

	mounted(){
		let ec = echarts.init(this.$el);
		let option = {
		    color: ['#5793f3', '#d14a61'],

		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross'
		        }
		    },
		    grid: {
		        right: '20%'
		    },
		    toolbox: {
		        feature: {
		            dataView: {show: true, readOnly: false},
		            restore: {show: true},
		            saveAsImage: {show: true}
		        }
		    },
		    legend: {
		        data:['蒸发量','降水量']
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisTick: {
		                alignWithLabel: true
		            },
		            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name: '蒸发量',
		            min: 0,
		            max: 250,
		            position: 'left',
		            axisLine: {
		                lineStyle: {
		                    color: '#5793f3'
		                }
		            },
		            axisLabel: {
		                formatter: '{value} ml'
		            }
		        },
		        {
		            type: 'value',
		            name: '降水量',
		            min: 0,
		            max: 250,
		            position: 'right',
		            offset: 80,
		            axisLine: {
		                lineStyle: {
		                    color: '#d14a61'
		                }
		            },
		            axisLabel: {
		                formatter: '{value} ml'
		            }
		        }
		    ],
		    series: [
		        {
		            name:'蒸发量',
		            type:'bar',
		            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		        },
		        {
		            name:'降水量',
		            type:'bar',
		            yAxisIndex: 1,
		            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		        }
		    ]
		};
		ec.setOption(option);
	}
}

</script>

<style lang="less" scoped>
	
</style>