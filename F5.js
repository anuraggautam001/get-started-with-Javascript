function sayHello(){
    var x=document.getElementById("name");
    alert("Hello "+x.value);
}

function showMe(){
    var x = document.getElementsByName("same");
    var items="";
    for(var i=0;i<x.length;i++){
        if(x[i].checked){
            items=items+x[i].value+" ";
        }
    }
    alert("items selected "+ items);
}


function printItems(){
    var x=document.getElementsByTagName("input");
    var bool=true;
    for(var i=0;i<x.length;i++){
        if(!x[i].checked){
            bool=false;
            break;
        }
    }
    if(!bool){
   alert("Please select all items");}
}