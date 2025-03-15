let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000)
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000)
};
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level${level}`;
    let ranIndx=Math.floor(Math.random()*3);
    let randColor=btns[ranIndx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randbtn);
}
function checkAns(indx){
        if(userseq[indx]===gameseq[indx]){
        console.log("same value")
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! <b>your score is ${level}</b> <br>Press Any key To Start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}