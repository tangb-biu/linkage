import { FILTER_VALUE, SET_DATA} from './mutation-types'
import common from '@/utils/common'
export default {
	[FILTER_VALUE](state, filter) {
		let {filters, data, _cache} = state;
		let index = -1;
		for(let i=0; i<filters.length; i++) {
			if(filters[i][0] == filter['key'] && filters[i][1] == filter['name']){
				index = i;
				break;
			}
		}
		if(index == -1) {
			filters.push([filter['key'], filter['name']]);
		}else {
			filters.splice(index, 1);
		}
		data['data'] = common.deepCopy(_cache['data']);
		for(let i=0; i<filters.length; i++) {
			data['data'] = data['data'].filter(function(obj){
				return obj[filters[i][0]] == filters[i][1];
			});
		}
	},

	[SET_DATA](state, data) {
		state._cache = common.deepCopy(data);
		state.data = data;
	}

}