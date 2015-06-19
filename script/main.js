(function(){
	function init(){

		window.requestAnimFrame = (function(){
			return  window.requestAnimationFrame       ||
			      	window.webkitRequestAnimationFrame ||
			      	window.mozRequestAnimationFrame    ||
			      	function( callback ){
			        	window.setTimeout(callback, 1000 / 60);
			      	};
		})();

		var canvas = document.createElement("canvas"),
			ctx = canvas.getContext("2d"),
			cW = canvas.width = window.innerWidth,
			cH = canvas.height = window.innerHeight;

		canvas.id = "main_canvas";
		document.body.appendChild(canvas);
		
		var Ball = function(){
			this.x = Math.random() * cW;
			this.y = Math.random() * cH;

			this.r = cW / 20;

			this.vx = Math.floor(Math.random() * 2 + 1);
			this.vy = Math.floor(Math.random() * 2 + 1);		
			
			
		
		};
		Ball.prototype.draw = function(){
			ctx.beginPath();
			ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
			ctx.fill();
			
		};
		Ball.prototype.move = function(){
			this.x += this.vx;
			this.y += this.vy;

			if(this.x < 0 + this.r){
				this.x = this.r;
				this.vx *= -1;			
			}
			if(this.x > cW - this.r){
				this.x = cW - this.r;
				this.vx *= -1;			
			}
			if(this.y < 0 + this.r){
				this.y = this.r;
				this.vy *= -1;			
			}
			if(this.y > cH - this.r){
				this.y = cH - this.r;
				this.vy *= -1;			
			}	
		};
		

		var balls = [],
			ballsNr = 20;

		for(var i=0;i<ballsNr;i++){
			balls.push(new Ball());
		}

				
		function render(){
			ctx.clearRect(0,0,cW,cH);

			for(var i=0;i<ballsNr;i++){
				balls[i].draw();
				balls[i].move();
			}

			window.requestAnimFrame(render);		
		}
	
		window.requestAnimFrame(render);

	}
	window.addEventListener("load",init,false);
})();
