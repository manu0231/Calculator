let bracketFlag = 0;
const addToDisplay = (val) => {
    const display = document.getElementById("display");
    if (val == 'AC') {
        display.value = "";
        bracketFlag=0;
    } 
    else if(val =='back'){
        display.value = display.value.slice(0,-1);
    }
    else if(val == '()'){
        if(bracketFlag==0){
            display.value+='('
            bracketFlag=1;
        }
        else{
            display.value+=')'
            bracketFlag=0;
        }
    }
    else if (val == '='){
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value ="Invalid Format";
        }
    }
    else {
        display.value += val;
    }
};

