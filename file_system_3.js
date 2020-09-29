var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly writtern data");
    fs.readFile('input.txt', function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});
