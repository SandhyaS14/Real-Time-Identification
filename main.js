noseX = 0;
noseY = 0;
leftX = 0;
rightX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 525);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResult);
}

function modelLoaded() {
    console.log("Posenet is loaded");
}

function draw() {
    background("grey");
    fill("blue");
    stroke("blue");
    square(noseX, noseY, 100);
    document.getElementById("dimension").innerHTML = difference;
}

function gotResult(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;
        difference = floor(rightX - leftX);
        console.log(difference);
    }
}