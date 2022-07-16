const computerChoice=document.getElementById('computer-choice')
const playerChoice=document.getElementById('player-choice')
const result=document.getElementById('results')
const possibleChoices=document.querySelectorAll('button')
let userChoice
let pcChoice
let resultx
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    playerChoice.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNum=Math.floor(Math.random()*possibleChoices.length)
    switch (randomNum){
        case 0:
            pcChoice='rock'
            break;
        case 1:
            pcChoice='paper'
            break;
        case 2:
            pcChoice='scissors'
            break;
    }
    computerChoice.innerHTML=pcChoice
}
function getResult(){
   if(pcChoice===userChoice){
    resultx='Draw'
   }
   if(pcChoice==='rock'&&userChoice==='paper'){
    resultx='Win'
   }
   if(pcChoice==='paper'&&userChoice==='scissors'){
    resultx='Win'
   }
   if(pcChoice==='scissors'&&userChoice==='rock'){
    resultx='Win'
   }
  
   if(userChoice==='rock'&&pcChoice==='paper'){
    resultx='Lose'
   }
   if(userChoice==='paper'&&pcChoice==='scissors'){
    resultx='Lose'
   }
   if(userChoice==='scissors'&&pcChoice==='rock'){
    resultx='Lose'
   }
   result.innerHTML=resultx
}