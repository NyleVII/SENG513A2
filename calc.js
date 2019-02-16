
let displayStr = "0";
let prevCalcStr = "0";
let allClear = false;


function getResult(){
    prevCalcStr = displayStr;
    try {
        displayStr = math.eval(displayStr);
    }
    catch (e){
        displayStr = "ERROR"; //For incorrect syntax
    }

    allClear = true;
    document.getElementById("clearBtn").innerHTML = "AC";
    document.getElementById("prevCalc").innerHTML = prevCalcStr + " =";
    document.getElementById("display").innerHTML = displayStr;
}

function clearBtn(){
    console.debug("Clearing");
    if(allClear){
        prevCalcStr = displayStr;
        displayStr = "0";
        allClear = false;
        document.getElementById("clearBtn").innerHTML = "CE";
        document.getElementById("prevCalc").innerHTML = "ANS = " + prevCalcStr;
    }
    else{
        if(displayStr.length > 1){
            displayStr = displayStr.substr(0, displayStr.length - 1);
        }
        else{
            displayStr = "0";
        }
    }
    document.getElementById("display").innerHTML = displayStr;
}

function updateDisplay(str){
    allClear = false;
    document.getElementById("clearBtn").innerHTML = "CE";

    // Replace the value
    if(displayStr === "0"){
        if(str !== "0"){
            displayStr = str;
        }
        else{
            displayStr = "0";
        }
    }
    else if(displayStr === "ERROR"){
        displayStr = str;
        allClear = true;
        document.getElementById("clearBtn").innerHTML = "AC";
    }
    else{
        displayStr = displayStr + str;
    }

    document.getElementById("display").innerHTML = displayStr;
    console.debug("Update Display: " + str);
}


