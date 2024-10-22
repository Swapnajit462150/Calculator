var result = document.getElementById("inputbox");

function display(number){
    inputbox.value += number;
}
function calculate(){
    var final_number = inputbox.value;
    var final_result = eval(final_number);
    inputbox.value = final_result;
}
function clr(){
    inputbox.value = "";
}
function del(){
    inputbox.value = inputbox.value.slice(0,-1);   
}
