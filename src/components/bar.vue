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
			name: '',
			legend: [],
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
			var key1 = 'register';
			var key2 = 'date';
			let nest = dataNest()
				.key((d) => {
					return d[key1];
				})
				.key((d) => {
					return d[key2];
				})
				.entries(this.vdata);
			if(this.legend.length<1) {
				this.legend = nest.map((n) => {return n['key']});
			}
			console.log(nest);
			if(this._chart){
				let option = {
					series: (function(nest){
				        	var arr = [];
				        	var cache = [];
			        		for(let j=0; j<nest.length; j++) {
					        	arr.push({
					            name: nest[j]['key'],
					            type:'bar',
					            data: nest[j]['values'].map((ele) => {
						            	return ele['values'].length;
						            })
					            })
					        	cache.push(nest[j]['key']);
					        }

					        let last = common.strArrayOmit(that.legend, cache);
					        for(let i=0; i<last.length; i++) {
					        	arr.push({
						            name: last[i],
						            type:'bar',
						            data: []
					        	});
					        }
					        return arr;
				        }(nest)),
			        xAxis: {
				        type: 'category',
				        //axisLine: {onZero: false},
				        data: (function(){
				            	var result = nest ? nest[0]['values'].map(n => n.name) : [];
				            	return result;
				            }())
			    	},
				}
				this._chart.setOption(option);
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
				            	var result = nest ? nest[0]['values'].map(n => n.name) : [];
				            	return result;
				            }())
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
			    series: (function(nest){
		        	var arr = [];
	        		for(let j=0; j<nest.length; j++) {
			        	arr.push({
				            name: nest[j]['key'],
				            type:'bar',
				            data: nest[j]['values'].map((ele) => {
				            	return ele['values'].length;
				            })
			        	});
			        }
			        return arr;
		        }(nest)),
			};
			ec.setOption(option);
			ec.on('legendselectchanged', function(ev){
				that.name = ev.name;
				that.filterValue({
					key: key1,
					name: ev.name
				})
				if(!ev.selected[ev.name]) {
					that.name = '';
				}
			})
			ec.on('legendselectchanged')
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