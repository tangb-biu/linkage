<template>
	<div class="footer">
		<p class="footer-content">茶水工小唐 &copy;2017</p>
	</div>
</template>

<script>
export default {
	name: 'footer'

}

</script>

<style lang="less" scoped>
@bg :#3b3b3b;
.footer {
	width: 100%;
	height: 50px;
	background-color: @bg;
	color: #969899;
	text-align: center;
	bottom: 0;
}
.footer-content {
	padding-top:10px;
}
</style>