if(userAge < 21){
    if(userAge > 21){      
    }
    alert("How old are you?");
}
console.log(userAge);

function userAge(){
    let question = prompt("What is your age?");
    while(question < 21){
    alert("Please enter your age");
    let question = prompt("What is your age?");
    }
}
userAge();

var imageAmount = prompt("Enter a number");
for(let i = 0; i < 4; i++){
  document.write("<image src='https://images.unsplash.com/photo-1567552229523-aaa2f6b76a60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'>"); 
  console.log(i)
}