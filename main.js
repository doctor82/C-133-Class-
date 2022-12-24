img = "";
status = "";
objects=[];
function preload() {
    img = loadImage("dog_cat.jpg");

}
function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Objects";
}
function modelLoaded() {
    console.log("Model Is Loaded");
status=true;
objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
if(error){
console.error(error);
}else{
console.log(results);
objects=results;

}
}
function draw() {
   
    image(img, 0, 0, 650, 450);
    if(status!=""){
    for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    fill("red");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+20,objects[i].y+20);
    stroke("red");
    noFill();
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
   
}
