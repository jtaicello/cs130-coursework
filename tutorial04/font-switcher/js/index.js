let originalFont = 5.4;

const makeBigger = () => {
   //alert('make bigger!');
   // change the .content font
   originalFont = originalFont + 0.3;
   document.querySelector(".content").style.fontSize = originalFont + "em";
   // change to hot pink
   document.querySelector(".content").style.background = "hotPink";
   // change message to hello
   document.querySelector(".content").innerHTML = "HELLO";
};

const makeSmaller = () => {
   //alert('make smaller!');
   originalFont = originalFont - 0.3
   document.querySelector(".content").style.fontSize = originalFont + "em";
   document.querySelector(".content").style.background = "white";
   // change message to good bye
   document.querySelector(".content").innerHTML = "good bye";

};


document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;
