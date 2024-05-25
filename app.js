const display1=document.getElementById("screen");
function display(input){
    display1.value +=input;

}

function reset(){
    display1.value="";

}

function equals(){
    try{
        display1.value=eval(display1.value);
    }
    catch(error){
        display1.value="Syntax Error"
    }
   
}
function del(){
    display1.value = display1.value.slice(0, -1);
}