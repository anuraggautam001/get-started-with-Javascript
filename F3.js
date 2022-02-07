function compare(x,y){
    if(x>y){
        alert(x+" is greater than "+y);
    }
    else if(x<y){
        alert(y+" is greater than "+x);
    }
    else{
        alert("Both are equal");
    }
}

function testforfunction(){
    var x= new Array(2,4,6);
    var sum=0;
    for(var i=0;i<x.length;i++){
        sum=sum+x[i];
    }
    alert("sum of numbers in array is "+sum);
}