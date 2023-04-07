function preload()
{

}
function setup()
{
    c =  createCanvas(500,500);
   c.center()
   video = createCapture(500,500);
   video.size(500,500)
   video.hide()
}
function draw()
{
    background('white');
    image(video,0,0,500,500)
}