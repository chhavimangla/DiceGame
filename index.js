var random1= Math.floor(Math.random()*6)+1;
var imgsrc1= "images/dice" + random1+ ".png";

var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", imgsrc1);

var random2= Math.floor(Math.random()*6)+1;
var imgsrc2= "images/dice"+ random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imgsrc2);

if(random1>random2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";   
}
