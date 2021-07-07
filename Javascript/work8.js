function guessGame(correct_numnber){
    guessed_num = prompt ("Enter a number between 1 and 25")

    if(guessed_num > correct_number){
        alert("Your number is too high");
    }
    else if(guessed_num < correct_number){
        alert("Your number is too low");
    }
    else(
        alert("You guessed correctly");
    )
}git 