// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

import MotionMachine from "./smoke.js";

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight
// smokemachine(context, [r,g,b])
var demo = MotionMachine(ctx, [54, 16.8, 18.2])