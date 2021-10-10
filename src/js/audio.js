
			var no_wr3ckords = 1,
			    no_images = 1,
			    image = 0,
			    play = 0;

export default function setup_audio_continuer()
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
