difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550, 550);
    canvas.position(560.150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
 console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
 if(results.length > 0)
 {

    leftWristX = results[0].pose.leftWrist.x;
    righttWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX +" rightWristX = " + rightWristX + "difference = " + difference);
 }
}

function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Size of a Text will be = " + difference +"px";
    textSize(difference);
    fill('#F90093');
    stroke('#F90093');
    text('Shark',50 ,400 );
}