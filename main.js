nosex=0
nosey=0
function setup(){
    canvas= createCanvas(400,400)
    canvas.center()
    video= createCapture(VIDEO)
    video.hide()

    //initialisationofposenetmodel
    poseNet= ml5.poseNet(video, modelloaded)

    //executionofmodel
    poseNet.on("pose", gotPoses)
}
function takesnapshot(){
    save("mustachepicture")
}

function draw(){
    image(video, 0, 0, 400,400)
    image(mustache,nosex-155,nosey-55, 60,50  )
}
function modelloaded(){
    console.log("model is ready")
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x
        console.log("nosex="+nosex)
        nosey=results[0].pose.nose.y
        console.log("nosey="+nosey)

    }
}

function preload(){
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

