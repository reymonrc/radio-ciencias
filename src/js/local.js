			function sleep(ms)
			{
				return new Promise(resolve => setTimeout(resolve, ms));
			}

function play_tune()
			{
				document.getElementById("character").src = "./img/jigs4w.jpeg";
				play = 1;

				var myAudio = document.getElementById('my_audio');
				myAudio.src = "./mp3/wr3ckord_2.mp3";
				myAudio.play();
			}

function toggle_banner()
			{
				document.getElementById("wr3cked").src = "./img/jigs4w.jpeg";
			}

			var canvas = document.getElementById('canvas')
			var ctx = canvas.getContext('2d')
			canvas.width = innerWidth
			canvas.height = innerHeight

			var c1 = Math.floor(Math.random() * 250);
			var c2 = Math.floor(Math.random() * 250);
			var c3 = Math.floor(Math.random() * 250);
			var party = MotionMachine(ctx, [c1, c2, c3]);
			party.start() // start animating

			var type = Math.floor(Math.random() * 4);
			var colTime = Math.floor(Math.random() * 4000) + 5000;

			var datetime = new Date().getTime();

			function get_time_diff( datetime )
			{
				var datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456";

				var datetime = new Date( datetime ).getTime();
				var now = new Date().getTime();

				if( isNaN(datetime) )
				{
					return "";
				}

				if (datetime < now) {
					var milisec_diff = now - datetime;
				}else{
					var milisec_diff = datetime - now;
				}

				return milisec_diff;
			}

export default onmousemove = function (e)
			{
				if(get_time_diff(datetime) > colTime)
				{
					c1 = Math.floor(Math.random() * 250);
					c2 = Math.floor(Math.random() * 250);
					c3 = Math.floor(Math.random() * 250);
					party.stop();
					party = MotionMachine(ctx, [c1, c2, c3]);
					party.start(); // start animating
					datetime = new Date().getTime();
					type = Math.floor(Math.random() * 5);
					colTime = Math.floor(Math.random() * 4000) + 5000;
				}

				if(type == 0)
				{
					var x = Math.floor(Math.random() * innerWidth);
					party.setPreDrawCallback(function(dt){
						party.addMotion(x, innerHeight, .5);
						canvas.width = innerWidth;
						canvas.height = innerHeight;
					})
				}
				else if(type == 1)
				{
					var x = Math.floor(Math.random() * innerWidth);
					var y = Math.floor(Math.random() * innerHeight/2) + innerHeight/2;
					party.setPreDrawCallback(function(dt){
						party.addMotion(x, y, .5);
						canvas.width = innerWidth;
						canvas.height = innerHeight;
					})
				}
				else if(type == 2)
				{
					var x = Math.floor(Math.random() * innerWidth);
					var y = Math.floor(Math.random() * innerHeight/2) + innerHeight/2;
					party.setPreDrawCallback(function(dt){
						party.addMotion(x, y, .5);
						canvas.width = innerWidth;
						canvas.height = innerHeight;
					})
				}
				else if(type == 3)
				{
					var x = Math.floor(Math.random() * innerWidth);
					var y = Math.floor(Math.random() * innerHeight/2) + innerHeight/2;
					var x2 = Math.floor(Math.random() * innerWidth);
					var y2 = Math.floor(Math.random() * innerHeight/2) + innerHeight/2;
					party.setPreDrawCallback(function(dt){
						party.addMotion(x, y, .5);
						party.addMotion(x2, y2, .5);
						canvas.width = innerWidth;
						canvas.height = innerHeight;
					})
				}
				else
				{
					var x = e.clientX;
					var y = e.clientY;
					var n = .5;
					var t = Math.floor(Math.random() * 200) + 3800;
					party.addmotion(x, y, n, t);
				}
			}


			var no_wr3ckords = 1,
			    no_images = 1,
			    image = 0,
			    play = 0;

return function setup_audio_continuer()
			{
				var myAudio = document.getElementById('my_audio');
				myAudio.onended = function()
				{
					myAudio.src = "./mp3/wr3ckord_2.mp3";
					myAudio.play();
				}
			}

			function prev_image()
			{
				if(document.getElementById("my_media"))
				{
					var pic = document.getElementById('my_media');
					if(image == 0)
						image = no_images-1;
					else
						--image;
					pic.src = "./img/jigs4w.jpeg";
				}

				return;
			}

			function next_image()
			{
				if(document.getElementById("my_media"))
				{
					var pic = document.getElementById('my_media');
					image = (image+1)%no_images;
					pic.src = "./img/jigs4w.jpeg";
				}

				return;
			}

			function keyPressEvent(event)
			{
				var char = event.keyCode,
				    wr3ckord = char;

				//alert(char);

				if(char == 9  ||
				   char == 16 ||
				   char == 17 ||
				   char == 18 ||
				   char == 20 ||
				   char == 91)
				{
					return;
				}
				else if(char == 32 || char == 80)
				{
					var myAudio = document.getElementById('my_audio');
					if(myAudio.paused)
						myAudio.play();
					else
						myAudio.pause();

					return;
				}
				else if(char == 37)
				{
					var myAudio = document.getElementById('my_audio');
					myAudio.currentTime -= 1;

					return;
				}
				else if(char == 38)
				{
					var pic = document.getElementById('my_media');
					if(image == 0)
						image = no_images-1;
					else
						--image;
					pic.src = "./img/jigs4w.jpeg";

					return;
				}
				else if(char == 39)
				{
					var myAudio = document.getElementById('my_audio');
					myAudio.currentTime += 1;

					return;
				}
				else if(char == 40)
				{
					var pic = document.getElementById('my_media');
					image = (image+1)%no_images;
					pic.src = "./img/jigs4w.jpeg";

					return;
				}

				var myAudio = document.getElementById('my_audio');
				myAudio.src = "./mp3/wr3ckord_2.mp3";
				myAudio.play();
			}
		</script>