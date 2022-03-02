song1 = "";
song2 = "";
left_wrist_y = 0;
rigth_wrist_y = 0;
left_wrist_x = 0;
rigth_wrist_x = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    posenetmodel = ml5.poseNet(video, modelloaded);
    posenetmodel.on("pose", giveposes);

}

function modelloaded() {
    console.log("Posenet Model Is Loaded");
}

function draw() {
    image(webcam, 0, 0, 600, 450)
}

function giveposes(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
        left_wrist_x = resultsarray[0].pose.leftWrist.x;
        right_wrist_x = resultsarray[0].pose.rightWrist.x;
        left_wrist_y = resultsarray[0].pose.leftWrist.y;
        right_wrist_y = resultsarray[0].pose.rightWrist.y;
    }
}