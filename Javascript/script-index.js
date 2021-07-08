if(userAge < 21){
    if(userAge > 21){      
    }
    alert("How old are you?");
}
console.log(userAge)

function userAge(){
    let question = prompt("What is your age?");
    while(question != "age"){
        for(let i = 0; i < 18; i++){
            question = prompt("What is your age?");
        }
    alert("Please enter your age");
    }
    console.log(userAge < 18)