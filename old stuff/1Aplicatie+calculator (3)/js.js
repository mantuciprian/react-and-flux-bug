function say() {
    msg.className = "alert alert-warning";
    msg.textContent = "You must enter at least 5 caracters";
   

}
function checkUser() {
    var username = user.value;
    if (username.length < 5) {
        msg.className = "alert alert-danger";
        msg.textContent = "Not enought caracters!"
    } else {
        msg.className = " ";
        msg.textContent = " ";
    }
}
function sayPw() {
    passwordMsg.className = "alert alert-warning";
    passwordMsg.textContent="You must enter at least 7 caracters";
}
function checkPassword() {
    var password = passWord.value;
    if (password.length < 7) {
        passwordMsg.className = "alert alert-danger";
        passwordMsg.textContent = "Not enought caracters! Your accound may be hacked!"
    } else {
        passwordMsg.className = " ";
        passwordMsg.textContent = " ";
    }

}
function unlock() {
    var x = user.value;
    var y = passWord.value;
    if (x.length >= 5 && y.length >= 7) {
        document.getElementById("usernameData").textContent = x;
        document.getElementById("passwordData").textContent = y;
        document.getElementById("messageError").textContent = " ";
        document.getElementById("messageError").className = " ";
        document.getElementById("accountSuccess").className = "alert alert-success";
        document.getElementById("accountSuccess").textContent = "Your accout has been created!";
    } else if (x.length < 5 && y.length < 7) {
        document.getElementById("usernameData").textContent = " ";
        document.getElementById("passwordData").textContent = " ";
        document.getElementById("messageError").textContent = "Account data incorrect, your accont has not been created! ";
        document.getElementById("messageError").className = "alert jumbotron alert-danger";
        document.getElementById("accountSuccess").className = "";
        document.getElementById("accountSuccess").textContent = "";
       
    } else if (x.length < 5) {
        document.getElementById("usernameData").textContent = " ";
        document.getElementById("passwordData").textContent = " ";
        document.getElementById("messageError").textContent = "Account data incorrect, your accont has not been created! ";
        document.getElementById("messageError").className = "alert jumbotron alert-danger";
        document.getElementById("accountSuccess").className = "";
        document.getElementById("accountSuccess").textContent = "";
    } else if (y.length < 7) {
        document.getElementById("usernameData").textContent = " ";
        document.getElementById("passwordData").textContent = " ";
        document.getElementById("messageError").textContent = "Account data incorrect, your accont has not been created! ";
        document.getElementById("messageError").className = "alert jumbotron alert-danger";
        document.getElementById("accountSuccess").className = "";
        document.getElementById("accountSuccess").textContent = "";
    }
}
function sayUp() {
    var x = user.value;
    if (x.length >= 5) {
        msg.className = " ";
        msg.textContent = " ";
    }

}
function sayPwUp() {
    var y = passWord.value;
    if (y.length >= 7) {
        passwordMsg.className = " ";
        passwordMsg.textContent = " ";

    }
}
function display() {
    var x = document.getElementById("viz");
    x.style.display = "block";

}
function displayUp() {
    var x = document.getElementById("viz");
    x.style.display = "block";

}

var user = document.getElementById("username");//
var msg = document.getElementById("mesage");
var passWord = document.getElementById("password");
var passwordMsg = document.getElementById("pwMsg");
var reg = document.getElementById("register");
user.addEventListener("focus", say);
user.addEventListener("blur", checkUser);
passWord.addEventListener("focus", sayPw);
passWord.addEventListener("blur", checkPassword);
reg.addEventListener("click", unlock);
user.addEventListener("keyup", sayUp);
passWord.addEventListener("blur", checkPassword);
passWord.addEventListener("keyup", sayPwUp);
window.addEventListener("keypress", display);
//text charts counter
var chartsNumber = document.getElementById("txtArea");
var displayChartsLeft = document.getElementById("caracLeft");
function countChartsLeft() {
    var count = chartsNumber.value;
    var result = "You have " + (180 - count.length) + " charts left. ";
   
    displayChartsLeft.textContent = result;

}
chartsNumber.addEventListener("keyup", countChartsLeft);
//list adder:
function scriee() {
    var x = document.createElement("li");
    var y = document.getElementById("itmName").value;
    var z = document.createTextNode(y);
    x.appendChild(z);
    var position = document.getElementById("listReceiver");
    position.appendChild(x);
    

}
var buttonAdder = document.getElementById("add");
buttonAdder.addEventListener("click", scriee);
//calculator side:
function operationStart() {
    var x = document.getElementById("nr1").value;
    var y = document.getElementById("oper").value;
    
    var z = document.getElementById("nr2").value;
    var result;
    if (y === "+") {
        result = Number(x) + Number(z);
    } else if (y === "-") {
        result = Number(x) - Number(z);
    } else if (y === "*") {
        result = Number(x) * Number(z);
    } else if (y === "/") {
        result = Number(x) / Number(z);
    } else {result=" Please input a valid operator! " }
  
    var location = document.getElementById("operationResult");
    location.textContent = result;
}
var calculation = document.getElementById("calculate");
calculation.addEventListener("click", operationStart);