// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

import MotionMachine from "./js/smoke.js";

//import "./js/local.js";
//import "./js/audio.js";


			var no_wr3ckords = 24,
			    no_images = 5,
			    image = 0,
			    play = 0;

			function setup_audio_continuer()
			{
				var myAudio = document.getElementById('my_audio');
				myAudio.onended = function()
				{
					myAudio.src = "./mp3/wr3ckord_".concat((new Date().getSeconds())%no_wr3ckords + 1).concat(".mp3");
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
					pic.src = "./media/wr3ckord_".concat(image%no_images+1).concat(".jpg");
				}

				return;
			}

			function next_image()
			{
				if(document.getElementById("my_media"))
				{
					var pic = document.getElementById('my_media');
					image = (image+1)%no_images;
					pic.src = "./media/wr3ckord_".concat(image%no_images+1).concat(".jpg");
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
					pic.src = "./media/wr3ckord_".concat(image%no_images+1).concat(".jpg");

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
					pic.src = "./media/wr3ckord_".concat(image%no_images+1).concat(".jpg");

					return;
				}

				var myAudio = document.getElementById('my_audio');
				myAudio.src = "./mp3/wr3ckord_".concat(wr3ckord%no_wr3ckords+1).concat(".mp3");
				myAudio.play();
			}
