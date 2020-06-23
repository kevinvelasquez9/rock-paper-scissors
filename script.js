const choices = ["rock", "paper", "scissors"];

choices.forEach(choice => {
    document.getElementById(choice).addEventListener("click", () => {
    playGame(choice, computer());
    })
})

computer = () => {
    let i = Math.floor(Math.random()*3);
    console.log(choices[i]);
    return choices[i];
}

const map = new Map()
map.set("rock", "scissors");
map.set("paper", "rock");
map.set("scissors", "paper");

playGame = (user, computer) => {
    let msg;
    display(computer)
    if (user === computer) {
        msg = "It's a tie.";
    } else if (map.get(user) === computer) {
        msg = "You win!";
    } else {
        msg = "You lose!";
    }
    document.getElementById("win").innerHTML = msg;
}

display = (computer) => {
    document.getElementById("result").innerHTML = `Computer chose ${computer}.`
}
