function setup(){
    canvas= createCanvas(400,400)
    canvas.center()
    video= createCapture(VIDEO)
    video.hide()
}
function takesnapshot(){
    save("mustachepicture")
}