var plateCount = prompt("How many plates?");

for(let i = 1; i <= plateCount; i++){
    console.log(i);
}

var x=5;
console.log(--5);
console.log("my value for x is: " + x);

function multiply(x){
    console.log(x*2);
    let mult= x*2;
    return x*2;
}

multiply(10);

//Prompt the user to enter paper, if they don't enter paper, continue asking until they do
// Put this inside of a function, it does not need a paramter or return value

function paper(){
let question = prompt("What is something rectangular that you write on?");
while(question != "paper"){
alert("Please enter paper");
question = prompt("What is something rectangular that you write on?");
}
}

paper();

function paper(){
    let question = prompt("What is something rectangular that you write on?");
    while(question != "paper"){
        for(let i = 0; i < 5; i++){
            question = prompt("What is something rectangular that you write on?");
        }
    alert("Please enter paper");
    question = prompt("What is something rectangular that you write on?");
    }
    }
    
    paper()

    //Ask the user to enter a number between 1 and 10 and then tell the user if they guessed
    //too low or high

    function guessNumber(){
    var number = prompt("Guess a number between 1 and 10");
    var correctNum = 9;

    if(correctNum==number){
        alert("You guessed correctly")
    }

    if(correctNum < number){
        alert("You are incorrect your number is too high");
    }

    if(correctNum > number){
        alert("You are incorrect your number is too low");
    }
}
    //Loop the game until they game the right number, it may be useful to store the
    //guessing portion inside of a function
let stopGuessing = false;

while(!stopGuessing){
     stopGuessing = guessNumber();
 }
