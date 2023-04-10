
let screen = document.getElementById("display")
let savedOperator = ""
let onScreen = ""
let number1 = null 

// Calcul functions

function addNumber(num){
    onScreen += num
    refreshScreen();
}

function addOperator(operator){
    if (savedOperator == ""){ 
        savedOperator = operator
        number1 = Number(onScreen)
        onScreen = ""
        refreshScreen();
        return
        
    }
    alert("Un operateur est déjà enregistré")
    
}

function calculate(){
    if (savedOperator == "" || onScreen == ""){
        alert("error")
        return
    }
    switch(savedOperator){
        case"/":
            if (onScreen == "0"){
                alert("vous ne pouvez toujours pas diviser par zero")
                return
            }
            onScreen = number1/Number(onScreen)
            refreshScreen()
            resetVar()
            return
        case"*":
            onScreen = number1*Number(onScreen)
            refreshScreen()
            resetVar()
            return
        case"+":
            onScreen = number1+Number(onScreen)
            refreshScreen()
            resetVar()
            return
        case"-":
            onScreen = number1-Number(onScreen)
            refreshScreen()
            resetVar()
            return
        default:
            alert("error")
    }
    

}

function pressDot(){
    if(String(onScreen).includes(".")){return}
    onScreen += "."
    refreshScreen()
}
function setNegative(){
    if(String(onScreen).includes("-")){
        onScreen = String(onScreen).substring(1)
    }
    else{
        onScreen = "-"+onScreen
    }
    refreshScreen()
}
// Useful functions 

function del(){
    onScreen = onScreen.substring(0, onScreen.length-1)
    refreshScreen();
}
function reset(){
    onScreen = ""
    refreshScreen();
}
function refreshScreen(){
    screen.innerHTML = onScreen
}
function resetVar(){
    savedOperator = ""
}