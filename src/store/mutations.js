import { FILTER_VALUE, SET_DATA } from './mutation-types'
import { isObjectEquals } from '@/utils/common'
export default {
	[FILTER_VALUE](state, filter) {
		let {filters, data} = state;
		filters.push([filter['key'], filter['name']]);
		data['data'] = data['data'].filter(function(obj){
			return obj[filter['key']] == filter['name'];
		})
		console.log(state.data);
	},

	[SET_DATA](state, data) {
		state._cache = data;
		state.data = data;
	}

}