import { FILTER_VALUE, SET_DATA } from './mutation-types'
import { isObjectEquals } from '@/utils/common'
export default {
	[FILTER_VALUE](state, filterKey, filterVal) {
		let [flag, filters] = [false, state.filters];
		/*
		for(let i=0; i<filters.length; i++) {
			if(isObjectEquals(filters[i], filterObj)) {
				flag = true;
				break;
			}
		}
		
		*/

		filters.push(filters);

		state.data = state.data.filter(function(obj){
			return obj[filterKey] == filterVal;
		})

	},

	[SET_DATA](state, data) {
		state._cache = data;
		state.data = data;
	}

}