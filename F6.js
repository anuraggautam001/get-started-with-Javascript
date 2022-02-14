function validate(){
    var x= document.getElementById("name").value;
    var y= document.getElementById("number").value;

    if(x==""){
        alert("Please Enter Your Name");
        return false;
    }
    if(y==""){
        alert("Enter Your Mobile Number");
        return false;
    }
    if(isNaN(y)){
        alert("Please Enter Numeric Data As Mobile Number");
        return false;
    }
    if(y.length!=10){
        alert("Mobile number cannot be less than 10 digits");
        return false;
    }
    alert("All Data Validated");
    return true;
}



function checkRadio(){
    var x= document.getElementsByName("gender");
    for(var i=0;i<x.length;i++){
        if(x[i].checked){
            return true;
        }
    }
    alert("Please select Gender");
    return false;
}

function checkSelectBox(){
    var x= document.myform.country;
    if(x.selectedIndex==0){
        alert("Please Select Country");
        return false;
    }
    alert(x.value);
    return true;
}