nosex=0;
nosey=0;
function preload(){
    img=loadImage('https://i.postimg.cc/63KCvsFH/clownnose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    console.log(results);
    if(results.length>0){
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex);
        console.log("nosey="+nosey);
    }
}


function draw(){
    image(video,0,0,300,300);
    image(img,nosex,nosey,30,30);
}

function take_snapshot(){
    save('clownphoto.png');
}