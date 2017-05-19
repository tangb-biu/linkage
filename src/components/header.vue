<template>
  <div class="header" :style="styleObject">
    <div class="header-container">
      <!-- <img :src="url"/> -->
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
        styleObject: {
          'background-size': '100%',
          'background-postion': 'center',
          'background-repeat': 'no-repeat',
          'background-image': '',
          'background-color': '#222'
        }
      }
    },
    created(){
        let self = this;
        let canvas = document.createElement('canvas');
        let particleIndex = 0;
        let particles = {};
        canvas.height = 60;
        canvas.width = window.innerWidth;
        let ctx = canvas.getContext('2d');
          function Particle() {
          particleIndex ++;
          particles[particleIndex] = this;

          this.x = canvas.width / 2;
          this.y = canvas.height / 2;
          this.vx = Math.random() * 6 - 3;
          this.vy = Math.random() * 4 - 2;

          this.growth = (Math.abs(this.vx) + Math.abs(this.vy)) * 0.01;
          this.id = particleIndex;
          this.size = 1;
          this.color = getRandomColor();
        }

        Particle.prototype.draw = function () {
          this.x += this.vx;
          this.y += this.vy;
          this.size += this.growth;

          if(this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            delete particles[this.id];
          }

          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 2*Math.PI, false);
          ctx.fill();
        }

        function animate() {
          requestAnimationFrame(animate);

          ctx.fillStyle = '#3b3b3b';
          ctx.fillRect(0, 0, canvas.width,
            canvas.height);

          new Particle();

          for(var i in particles) {
            particles[i].draw();
          }
          self.styleObject['background-image'] = `url(${canvas.toDataURL()})`;

        }

        requestAnimationFrame(animate);
        function getRandomColor() {
          return '#' + (Math.random() * 0xffffff << 0).toString(16);
        }
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
  color: /*#17abcb*/#fff;
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
