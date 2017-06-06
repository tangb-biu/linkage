import {FILTER_VALUE} from './mutation-types'
export default {
	filterValue({commit}, option) {
		commit(FILTER_VALUE, option)
	}
}