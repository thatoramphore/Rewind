//Get the string from the user input
//CONTROLLER
function getValue(){
    //make alert invisible afrom the beginning
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    //pass userString to reverseString
    let reverse = reverseString(userString);

    //display reversed string
    displayString(reverse);
}

//Reverse the string
//LOGIC
function reverseString(userString){
    let newString = [];
    for(let i=userString.length-1; i>=0; i--){
        newString += userString[i];
    }
    return newString;
}

//Display reversed string to the user
//VIEW
function displayString(reverse){
    //write message to the screen
    document.getElementById("msg").innerHTML = `Your string reversed is: ${reverse}`;
    
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("alert").classList.add("visible");
}