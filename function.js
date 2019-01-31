var display = document.getElementById("display");

function funct(n){
	display.innerHTML += n ;
}

function ans(){
	x = eval(display.innerHTML);
	display.innerHTML = x;
}

function efunct(){
	display.innerHTML='';
}

//Num Buttons
document.getElementById("1").addEventListener("click",function(){ funct(1); });
document.getElementById("2").addEventListener("click",function(){ funct(2); });
document.getElementById("3").addEventListener("click",function(){ funct(3); });
document.getElementById("4").addEventListener("click",function(){ funct(4); });
document.getElementById("5").addEventListener("click",function(){ funct(5); });
document.getElementById("6").addEventListener("click",function(){ funct(6); });
document.getElementById("7").addEventListener("click",function(){ funct(7); });
document.getElementById("8").addEventListener("click",function(){ funct(8); });
document.getElementById("9").addEventListener("click",function(){ funct(9); });
document.getElementById("0").addEventListener("click",function(){ funct(0); });
document.getElementById("period").addEventListener("click",function(){ funct('.'); });

//Operators
document.getElementById("division").addEventListener("click",function(){ funct('/'); });
document.getElementById("mul").addEventListener("click",function(){ funct('*'); });
document.getElementById("add").addEventListener("click",function(){ funct('+'); });
document.getElementById("min").addEventListener("click",function(){ funct('-'); });
document.getElementById("equals").addEventListener("click",function(){ ans(); });
