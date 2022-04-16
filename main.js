leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
mp3Song1 = "";
mp3Song2 = "";

function preload()
{
    mp3Song1 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.position(525,300);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 500, 400);
    fill("#00FF00");
    stroke("#00FF00");
    circle(leftWristX, leftWristY, 20);
}

function modelLoaded()
{
    console.log("poseNet is Initialized");                  
}

function gotPoses(results)
{
    if(results > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    }
}

function play()
{
    mp3Song1.play();
    mp3Song1.setVolume(1);
    mp3Song1.rate(1);
}