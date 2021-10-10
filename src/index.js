// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

import "./smoke.js";

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight
// smokemachine(context, [r,g,b])
var demo = MotionMachine(ctx, [54, 16.8, 18.2])

			function sleep(ms)
			{
				return new Promise(resolve => setTimeout(resolve, ms));
			}

			function play_tune()
			{
				document.getElementById("character").src = "./imgs/logo_".concat((new Date().getSeconds())%11 + 1).concat(".png");
				play = 1;

				var myAudio = document.getElementById('my_audio');
				myAudio.src = "./mp3/wr3ckord_".concat((new Date().getSeconds())%no_wr3ckords + 1).concat(".mp3");
				myAudio.play();
			}
			function toggle_banner()
			{
				document.getElementById("wr3cked").src = "./imgs/banner_".concat((new Date().getSeconds())%11 + 1).concat(".png");
			}

			var canvas = document.getElementById('canvas')
			var ctx = canvas.getContext('2d')
			canvas.width = innerWidth
			canvas.height = innerHeight

			var c1 = Math.floor(Math.random() * 250);
			var c2 = Math.floor(Math.random() * 250);
			var c3 = Math.floor(Math.random() * 250);
			var party = motionmachine(ctx, [c1, c2, c3]);
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

			onmousemove = function (e)
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