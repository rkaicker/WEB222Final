function formValidation() {
    clearErrors();
    var resultPass = validatePassword();
    var resultUser = validateUsername();
    result = resultPass && resultUser;
    if(result){
        alert("No errors! You have succesfully entered all required information");
    } else {
        var error = document.querySelector("#errors")
        error.style.display = "inline";
    }
    return result;
};

function validatePassword() {
    var errorMessage ="";
    var noError = true;

    var passString = document.querySelector("#password").value;
    passString = passString.trim();
    var passCheckString = document.querySelector("#passwordCheck").value;
    passCheckString = passCheckString.trim();

    var passLength = passString.length;
    if(passLength < 6){
        noError = false;
        errorMessage += "<p>Please ensure your password has 6 or more characters</p><br>";
    }

    var firstLetter = passString.charAt(0);
    if (!(firstLetter.match(/[a-z]/i))){
        noError = false;
        errorMessage += "<p>Please ensure your password starts with a letter</p><br>"
    }

    var capLetterCount = 0;
    var numberCount = 0;
    for (var i = 0; i < passString.length; i++){
        if (passString[i].match(/[A-Z]/)){
            capLetterCount++;
        } else if(passString[i].match(/[0-9]/)){
            numberCount ++;
        }
    }
    if (capLetterCount == 0){
        noError = false;
        errorMessage +="<p>Please ensure you have at least 1 capital letter in your password</p><br>";
    }
    if (numberCount == 0){
        noError = false;
        errorMessage += "<p>Please ensure you have at least 1 number in your password</p><br>";
    }

    if(passString.localeCompare(passCheckString)!=0){
        noError = false;
        errorMessage += "<p> Please ensure both passwords match</p><br>";
    }

    if (noError == false){
        showErrors(errorMessage);
    }
    return noError;
}

function validateUsername(){
    var errorMessage="";
    var noError = true;
    
    var userString = document.querySelector("#username").value;
    userString = userString.trim();

    var userLength = userString.length;
    if(userLength < 6){
        noError = false;
        errorMessage += "<p>Please ensure your username has 6 or more characters</p><br>";
    }
    var firstLetter = userString.charAt(0);
    if(!(firstLetter.match(/[a-z]/i))){
        noError = false;
        errorMessage += "<p>Please ensure your username starts with a letter</p><br>";
    }
    if (noError == false){
        showErrors(errorMessage);
    }
    return noError;

}

function showErrors(message){
    document.querySelector("#errors").innerHTML += message;
}

function clearErrors(){
    document.querySelector("#errors").innerHTML ="";
}
function hideErrors(){
    document.querySelector("#errors").style.display = "none";
}