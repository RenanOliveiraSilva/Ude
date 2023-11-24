//Rock Paper Scissor

let i = 0;
let rounds = 0;
let points = 0;
const arrayAd = ['rock', 'paper', 'scissors'];


    let opAd = arrayAd[getRandomNumber()];
    let opMy = prompt("Chose one: rock, paper, scissors");

    console.log(opAd);
    
    do {
        let continuePlay = 1;

        if (opMy == "rock") {

            if (opAd == "rock") {
                console.log("Draw: Your oponent chose rock!");
                rounds++;

            } else if (opAd == "paper") {
                console.log("Lose: : Your oponent chose paper!");
                rounds++;
                
            } else {
                console.log("Victory: : Your oponent chose scissors!");
                points++;
                rounds++;

            }

        } else if (opMy == "scissors") {

            if (opAd == "rock") {
                console.log("Lose: Your oponent chose rock!");
                rounds++;

            } else if (opAd == "paper") {
                console.log("Victory: : Your oponent chose paper!");
                rounds++;
                points++;
                
            } else {
                console.log("Draw: : Your oponent chose scissors!");
                rounds++;

            }

        } else {
            if (opAd == "rock") {
                console.log("Victory: Your oponent chose rock!");
                rounds++;
                points++;

            } else if (opAd == "paper") {
                console.log("Draw: : Your oponent chose paper!");
                rounds++;
                
            } else {
                console.log("Lose: : Your oponent chose scissors!");
                rounds++;

            }
        }

        let option = prompt("Whould like continue? (y) / (n)");
        continuePlay = option = "y" ? continuePlay = 1 : continuePlay = 0;
        console.log(i);

    } while (i != 0);

    console.log(`Rounds: ${rounds}, Points: ${points}`);


function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}
