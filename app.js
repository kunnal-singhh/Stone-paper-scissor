let userScore=0;
let compScore=0;
let msg=document.querySelector('#msg');
let choices =document.querySelectorAll('.choice');
const userScoreP=document.querySelector('#user-score');
const compScoreP=document.querySelector('#comp-score');
// console.log(choices);


const showWinner=(userWin,compChoice,userChoice)=>{ 
    if(userWin)
    {
         userScore++;
        userScoreP.innerHTML=userScore;
        msg.style.backgroundColor="green";
        msg.innerHTML=`You Win! Your  '${userChoice}'  beats  '${compChoice}'`;
      
    }
    else{
          compScore++;
          compScoreP.innerHTML=compScore;
          msg.style.backgroundColor="red";
          msg.innerHTML=`You Lose.  '${compChoice}'  beats your  '${userChoice}'`;
    }
}


const genCompChoice=()=>{ 
 const options=["rock","paper","scissor"];
const randIdx  =Math.floor(Math.random()*3);
return options[randIdx];
}

const playGame=(userChoice)=>{ 
const compChoice=genCompChoice();
if(userChoice===compChoice)
{ 
   msg.innerHTML='Game Draw. Try Again.';
   msg.style.backgroundColor=' #081b31';
}
else{ 
    let userWin=true;
    if(userChoice==="rock")
    { 
      userWin=  compChoice==='scissor'?true:false;
    }
    else if(userChoice==="paper"){ 
      userWin=  compChoice==='stone'?true:false;
    }
    else{ 
        userWin=compChoice==='paper'?true:false;
    }
    showWinner(userWin,compChoice,userChoice);
}
}

choices.forEach((choice)=>{ 
    choice.addEventListener("click",()=>{ 
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    })
});

