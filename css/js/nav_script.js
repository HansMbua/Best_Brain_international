function myfunction(){
   var x =  document.getElementById("navBar") 

    if(x.className === "myTopnavul "){
        x.className += " responsive";
    }else{
        x.className = "myTopnavul ";
    }
}
