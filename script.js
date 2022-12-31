

let maindisplay = document.getElementById("display");

let bracketflag = 0;


const addtodisplay = (key) => {

    console.log(key);
    // if(display.value == "0"){
    //     display.value = "";
    // }
    if(display.value == "0")
    {
        display.value = "";
    }

    if(key == "AC"){
        display.value = "0";
    }
    else if(key == "Back"){
        display.value = display.value.slice(0, -1);
        if(display.value == "")
        {
            display.value = "0";
        }
    }
    else if(key == "()"){
        //if first time pressed then -> opening bracket "("
        if(bracketflag == 0)
        {
            display.value += "(";
            bracketflag = 1;
        }
        else
        {
            display.value += ")";
            bracketflag = 0;
        }
    }
    else if(key == "="){
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "Error";
        }
    }
    else{
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ., +, -, *, /, %
        
        display.value += key;
    }
}




