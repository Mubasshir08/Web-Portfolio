let numb1 = document.getElementById("num1");
let counter1 = 0;
setInterval(function(){
    if(counter1 == 90){
        clearInterval();
    }
    else{ counter1 += 1;
    numb1.innerHTML = counter1 + "%";}
   

} ,22);

let numb2 = document.getElementById("num2");
let counter2 = 0;
setInterval(function(){
    if(counter2 == 80){
        clearInterval();
    }
    else{ counter2 += 1;
    numb2.innerHTML = counter2 + "%";}
   

} ,25 );

let numb3 = document.getElementById("num3");
let counter3 = 0;
setInterval(function(){
    if(counter3 == 75){
        clearInterval();
    }
    else{ counter3 += 1;
    numb3.innerHTML = counter3 + "%";}
   

} ,25);

let numb4 = document.getElementById("num4");
let counter4 = 0;
setInterval(function(){
    if(counter4 == 70){
        clearInterval();
    }
    else{ counter4 += 1;
    numb4.innerHTML = counter4 + "%";}
   

} ,30 );

let numb5 = document.getElementById("num5");
let counter5 = 0;
setInterval(function(){
    if(counter5 == 60){
        clearInterval();
    }
    else{ counter5 += 1;
    numb5.innerHTML = counter5 + "%";}
   

} ,33 );

let numb6 = document.getElementById("num6");
let counter6 = 0;
setInterval(function(){
    if(counter6 == 50){
        clearInterval();
    }
    else{ counter6 += 1;
    numb6.innerHTML = counter6 + "%";}
   

} ,37 );