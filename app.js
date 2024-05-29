let gameseq = [];
let userseq = [];
let btnColor = ["red","green","yellow","purple"];
let hs = 0;

let started = false;
let level = 0;

let h3 = document.querySelector('.h3');

document.addEventListener("keypress",function() {
     if(started == false) {
        started = true;
        levelUp();
     }    
});
 
function levelUp() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let num = Math.floor(Math.random() * 4);
    gameseq.push(btnColor[num]);
    console.log(gameseq);
    let btn = document.querySelector(`.${btnColor[num]}`);
    gameFlash(btn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");  
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");  
    }, 250);
}


    let btns = document.querySelectorAll(".btn");
    for(btn of btns) {
        btn.addEventListener("click",userPress);
    }


function userPress() {
    let btn = this;
    let color = btn.getAttribute("id");
    userseq.push(color);
    userFlash(btn);
    checkAns(userseq.length-1);
}    


function checkAns(idx) {
    if(gameseq[idx] === userseq[idx]) {
        if(gameseq.length == userseq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        hs = Math.max(hs,level);
        h3.innerHTML = `Game Over! <b>Your score is ${level}</b> <br> <b>High score is ${hs}</b> <br> Press any key to start the game`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function() {
            body.style.backgroundColor = "white";
        },500);
        reset();
    }
}

function reset() {
    gameseq = [];
    userseq =[];
    started = false;
    level = 0;
}