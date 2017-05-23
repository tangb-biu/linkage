(function(){
	let canvas = document.createElement('canvas');
	let particleIndex = 0;
	let particles = {};
	canvas.height = 60;
	canvas.width = 100;
	let ctx = canvas.getContext('2d');
    function Particle() {
		particleIndex ++;
		particles[particleIndex] = this;

		this.x = oCanvas.width / 2;
		this.y = oCanvas.height / 2;
		this.vx = Math.random() * 6 - 3;
		this.vy = Math.random() * 4 - 2;

		this.growth = (Math.abs(this.vx) + Math.abs(this.vy)) * 0.01;
		this.id = particleIndex;
		this.size = 0;
		this.color = getRandomColor();
	}

	Particle.prototype.draw = function () {
		this.x += this.vx;
		this.y += this.vy;
		this.size += this.growth;

		if(this.x < 0 || this.x > oCanvas.width || this.y < 0 || this.y > oCanvas.height) {
			delete particles[this.id];
		}

		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 2*Math.PI, false);
		ctx.fill();
	}

	function animate() {
		requestAnimationFrame(animate);

		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, oCanvas.width,
			oCanvas.height);

		new Particle();

		for(var i in particles) {
			particles[i].draw();
		}
	}

	requestAnimationFrame(animate);
})