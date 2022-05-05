var Nx=0
var Ny=0
var Lw=0
var Rw=0
var LwRwminus=0
function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  CANVAS= createCanvas(600,500)
  poses=ml5.poseNet(video,Modred)
  poses.on('pose',res)
  CANVAS.position(600,200)
}

function draw() {
 background("purple")
fill("black")
stroke("black")
textSize(LWRWminus)
text("Sans")
document.getElementById("whos").innerHTML="Size of text= " + Math.floor(LWRWminus)
}

function Modred() {
    console.log("Model Loaded")
}

function res(results) {
    if (results.length>0) {
        console.log(results)
        NX=results[0].pose.nose.x
        NY=results[0].pose.nose.y
        LW=results[0].pose.leftWrist.x
        RW=results[0].pose.rightWrist.x
        LWRWminus=LW-RW
    }
    

}