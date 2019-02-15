
let displayStr = "0"
let prevCalcStr = "0"


function getResult(){
    prevCalcStr = displayStr + " =";

    try {
        displayStr = math.eval(displayStr);
    }
    catch (e){
        displayStr = "ERROR"; //For incorrect syntax
    }

    document.getElementById("prevCalc").innerHTML = prevCalcStr;
    document.getElementById("display").innerHTML = displayStr;
}



function updateDisplay(str){
    // CLEAR button functionality
    if(str === ""){
        displayStr = "0"
    }
    // Replace the value
    if(displayStr === "0" && Number(str)){
        displayStr = str;
    }
    else if(displayStr === "ERROR"){
        displayStr = str;
    }
    else{
        displayStr = displayStr + str;
    }
    

    document.getElementById("display").innerHTML = displayStr;
    console.debug("Update Display: " + str);
}


