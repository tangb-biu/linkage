<template>
	<div>
		<headerItem></headerItem>
		<div class="content">
			<div class="vali-section">
				<div class="vali-area">
					<span class="vali-name">请输入观看码</span>
					<input class="vali-val" type="text" id="J_vali_val" v-model="vcode" @keydown.enter="checkCode()"/>
				</div>
				<div class="ok-area">
					<a class="btn btn-primary" @click="checkCode()">去观看</a>
				</div>
			</div>
		</div>
		<footerItem></footerItem>
	</div>
</template>

<script>
import headerItem from '@/components/header'
import footerItem from '@/components/footer'
import common from '@/utils/common'
export default {
	name: 'login',
  	components: {
  		headerItem,
  		footerItem
  	},
  	data: function() {
  		return {
  			vcode: ''
  		}
  	},
  	methods: {
  		checkCode() {
  			let code = common.trim(this.vcode);
  			const vcode = this.$store.state.vcode;
  			if(code === vcode) {
  				this.$router.push({ path: '/home' });
  			}
  		}
  	},
    created(){

    }
}
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	margin: 70px auto;
}
.vali-section {
	width:600px;
	margin: 0 auto;
	margin-top: 200px;
	height: 200px;
}
.vali-name {
	font-size: 16px;
	margin-right: 30px;
}

input{
	height: 40px;
	width: 300px;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    padding-left: 10px;
    line-height: 40px;
}
.btn-primary {
    color: #fff;
    background-color: #17ABCB;
    border-color: #17ABCB;
    width: 200px;
}
.ok-area {
	padding: 30px;
	padding-left: 80px;
}
</style>
