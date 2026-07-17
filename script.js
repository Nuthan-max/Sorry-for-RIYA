const pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(index){

pages.forEach(page=>page.classList.remove("active"));

pages[index].classList.add("active");

currentPage=index;

}

document.addEventListener("click",function(e){

if(e.target.id==="openBtn"){

showPage(1);

}

if(e.target.id==="next1"){

showPage(2);

startTyping();

}

if(e.target.id==="next2"){

showPage(3);

}

if(e.target.id==="next3"){

showPage(4);

}

});const message = `I know why you're mad...

I said Goodnight...

and then stayed awake till 4. 😭

You were absolutely right.

That wasn't fair from my side.`;

let i = 0;

function startTyping(){

const typing=document.getElementById("typing");

typing.innerHTML="";

i=0;

type();

}

function type(){

const typing=document.getElementById("typing");

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(type,40);

}

else{

document.getElementById("next2").style.display="inline-block";

}

}// ---------- Page 5 Buttons ----------

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    showPage(5);

    // Play music if available
    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(() => {});
    }
});

noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});