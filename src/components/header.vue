<template>
  <div class="header">
    <div class="header-container">
      <img :src="url"/>
      <a href="https://github.com/tangb-biu" target="_blank">github</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'header',
    data: function() {
      return {
        url: '',
      }
    },
    created(){
       let canvas = document.createElement('canvas');
       canvas.height = 60;
       canvas.width = 100;
       let ctx = canvas.getContext('2d');
       ctx.fillRect(20, 20, 80, 20);
       this.url = canvas.toDataURL();
       console.log('aaaaa');
    }
}
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid #bbb;
}
.header-container{
  width:60%;
  height:60px;
  margin: 0 auto;
}
.header-container a{
  color: #17abcb;
  float: right;
  font-size: 18px;
  width: 100px;
  margin-top: 17px;
}
a:link, a:visited {
  text-decoration: none;
}
img {
  height: 100%;
  width: 100px;
  float: left;
}
</style>
