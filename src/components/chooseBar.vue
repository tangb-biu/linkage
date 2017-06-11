<template>
	<div class="btn-group" role="group">
		<button type="button" class="btn btn-default" v-for="item in filters">{{ item }}</button>
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