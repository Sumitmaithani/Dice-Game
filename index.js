var randomNumber1 = Math.floor(Math.random()*6)+1;
var imgRandom1 = "images/dice"+randomNumber1+".png";
document.getElementsByClassName('img1')[0].src = imgRandom1;

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imgRandom2 = "images/dice"+randomNumber2+".png";
document.getElementsByClassName('img2')[0].src = imgRandom2;

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML="🚩Player 1 wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML="Player 2 wins!🚩";
}else{
    document.querySelector('h1').innerHTML="Draw!";
}
