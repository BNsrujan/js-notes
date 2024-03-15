let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const gencomchoise = ()=>{
    const option = ["rock","paper","scissors"];
    const random = Math.floor(Math.random()*3);
    return option[random];
}

const gameDrow =()=>{
    console.log("game is drow")
    msg.innerText ="game drow!"
    msg.style.backgroundColor = "#081b31";
}


const showwiner = (userWin,userchoise,compChoise)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText =  `you win! ${userchoise}_beats_${compChoise}`;
        msg.style.backgroundColor = "green"
    }else{
        comScore++;
        compScorePara.innerText = comScore;
        console.log("you lose");
        msg.innerText =`you loss! ${compChoise}_beats_${userchoise}`
        msg.style.backgroundColor = "red"
    }
};





const playGame = (userchoise)=>{
    console.log("user choise =",userchoise);
    const compChoise = gencomchoise();
    console.log("computer choise =",compChoise)
    




if(userchoise === compChoise){
    gameDrow();
}
else{
    let userWin = true ;
    if(userchoise === "rock"){
        userWin = compChoise === "paper" ? false : true ;
    } 
    else if (userchoise === "paper"){
        userWin = compChoise === "scissors" ? false : true ;
    }
    else{
        compChoise === "rock" ? false : true ;
    }
    showwiner(userWin,userchoise,compChoise)
}

}
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoise = choice.getAttribute("id");
        playGame(userchoise);
    })
})