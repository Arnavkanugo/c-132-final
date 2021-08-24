img="";
status="";
function draw()
{
    image(img,0,0,600,400);
fill("#9950C7");
text("dog",45,75);
noFill();
stroke("#C75097");
rect(30,60,450,350);
fill ("#abdbe3");
text("cat",300,99);
noFill();
stroke("#3ea9cb");
rect(300,90,270,320);
}
function preload()
{
       img=loadImage("dog_cat.jpg");
}
function setup()
{
    canvas=createCanvas(600,400);
    canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status detecting object";
}
function modelloaded(){
console.log("modelloaded");
status=true;
objectDetector.detect(img,gotResult);

}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }

else{
 console.log(results);
}
}