<template>
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" v-for="item in filters" @click="removeFilter(item)">{{ item[1] }}</button>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	data() {
		return {

		}
	},

	methods: {
		removeFilter(item) {
			this.$store.dispatch('filterValue',{
				key: item[0],
				name: item[1]
			})
		}
	},

	computed: {
		...mapState([
			'filters'
		])
	}
}
</script>

<style lang="less" scoped>
	
</style>