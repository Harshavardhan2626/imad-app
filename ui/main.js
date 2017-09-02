console.log('Loaded!');
alert("The doom of valeria");
var element=document.getElementById("main-text");
element.innerHTML="Harsha is so cool";

var img=document.getElementById("image");
marginleft=0;
function moveright()
{
    marginleft=marginleft+10;
    img.style.marginLeft=marginleft+'px';
}
img.onclick=function ()
{
    var interval=setInterval(moveright,50);
};