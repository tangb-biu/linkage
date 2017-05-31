<template>
	<div class="chart-comm">
	</div>
</template>

<script>
import echarts from 'echarts'
export default {
	name: 'ployline',
	data() {
		return {

		}
	},
	methods: {

	},
	computed: {

	},
	mounted() {
		let ec = echarts.init(this.$el);
		let option = {
			title: {
		        text: 'This is chart polyline.'
		    },
		    tooltip: {
		        formatter: function (params) {
		            var data = params.data || [0, 0];
		            return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        min: -60,
		        max: 20,
		        type: 'value',
		        axisLine: {onZero: false}
		    },
		    yAxis: {
		        min: 0,
		        max: 40,
		        type: 'value',
		        axisLine: {onZero: false}
		    },
		    series: [
		        {
		            id: 'a',
		            type: 'line',
		            smooth: true,
		            symbolSize: 20,
		            data: [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]]
		        }
		    ]
		};
		ec.setOption(option);
	}
}
</script>

<style lang="less" scoped>

</style>