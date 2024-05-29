let comColor = [];
let userColor = [];

let randomColor = ["red","yellow","green","purple"];

let gameStart = false;

let level = 0;
let hs = 0;

let body = document.querySelector("body");
body.addEventListener("keypress",function() {
    if(gameStart == false) {
        gameStart = true;
        levelUp();
    }
});

function levelUp() {
    userColor = [];
    level++;
    let h3 = document.querySelector('.h3');
    h3.innerText = `Level ${level}`;

    let color = randomColor[Math.floor(Math.random()*4)];
    comColor.push(`${color}`);
    console.log(comColor);
    let btn = document.querySelector(`.${color}`);
    comFlash(btn);
}
 
function comFlash(btn) {  
     btn.classList.add("flash");
     setTimeout(function() {
     btn.classList.remove("flash");
  },500);
}


let btns = document.querySelectorAll(".btn");
for(btn of btns) {
    btn.addEventListener("click",getBtn);
}

function getBtn() {
    let btn  = this;
    userFlash(btn);
    let color = btn.getAttribute("id");
    userColor.push(`${color}`);
    checkAns(userColor.length-1);
}

function userFlash(btn) {  
    btn.classList.add("userFlash");
    setTimeout(function() {
    btn.classList.remove("userFlash");
 },250);
}

function checkAns(idx) {
    if(comColor[idx] === userColor[idx]) {
        if(comColor.length == userColor.length) {
            levelUp();
        }
    } else { 
        let h3 = document.querySelector('.h3');
        hs = Math.max(hs,level);
        h3.innerHTML = `Game over! <br> Your score is ${level} </br> <br> Your High score is ${hs} </br>Press any key to start the game`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function() {
            body.style.backgroundColor = "white";
        },1000);
        reset();
    }
}

function reset() {
    comColor = [];
    userColor = [];
    gameStart = false;
    level = 0;
}

