



var fib = [];


fib[0] = 1;
fib [1] = 1;


for(i=2; i < 14; i++){
	fib[i] = fib[i-2]+fib[i-1];
	document.getElementById("numDisplay").innerHTML= fib;
}