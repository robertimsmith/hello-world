console.log("File name " + __filename);
console.log("Directory name " + __dirname);


function printHello(){
    console.log("Hello World!");

}

//call this after 2 seconds
var t = setTimeout(printHello, 2000);

clearTimeout(t);

setInterval(printHello, 2000);
