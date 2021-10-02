var buttons = document.querySelectorAll("#number");
var operation;
var display = document.getElementById("display");
var variables = [];
var answer;
var slider = document.querySelector("input");

for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        if(this.innerHTML == "DEL"){
            variables.pop();
            changeDisplay();
        }else if(this.innerHTML == "RESET"){
            variables=[];
            resetDisplay();
        }else if(this.innerHTML == "="){
            result();
        }else{
            changeDisplay(this.innerHTML);
        }
    });
}



function changeDisplay(num){
    variables.push(num);
    operation = variables.join("");
    display.innerHTML = operation;
    console.log(display);
}

function resetDisplay(){
    operation = '';
    display.innerHTML = "0";
}

function result(){
    display.innerHTML = eval(operation);
    variables = [display.innerHTML];
}

var btnStyle = document.querySelectorAll(".btn");
var btnPrimary = document.querySelectorAll(".btn-primary");
var btnSecondary = document.querySelector(".btn-secondary");
var keypad = document.querySelector(".buttons");
var display = document.querySelector(".display");
var body = document.querySelector("body");

if(slider.value == 0){
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    body.style.color = "white";
    display.backgroundcolor = "hsl(224, 36%, 15%)";
    keypad.backgroundColor = "hsl(223, 31%, 20%)";
    btnStyle.style.backgroundColor = "hsl(30, 25%, 89%)";
    btnStyle.style.boxShadow = "hsl(28, 16%, 65%)";
}else if(slider.value == 1){
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    body.style.color = "hsl(60, 10%, 19%)";
    display.backgroundcolor = "hsl(0, 0%, 93%)";
    keypad.backgroundColor = "hsl(0, 5%, 81%)";
    btnStyle.style.backgroundColor = "hsl(185, 42%, 37%)";
    btnStyle.style.boxShadow = "hsl(185, 58%, 25%)";
}