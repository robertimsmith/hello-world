//OS module
var os = require('os');
var cpus = os.cpus();
var cpuCount = cpus.length;

console.log ("Arch " + os.arch());
console.log ("EOL" + os.EOL);
console.log ("Constants " + os.constants.toString);
console.log ("There are " + cpuCount + " cpu(s) on this system");
console.log ("CPUs " + cpus);
console.log ("The server has been up for " + os.uptime() +  " seconds.");
console.log ("The server has been up for " + returnTime(os.uptime()) +  " H/M/S)");
console.log (os.userInfo());

for(var i = 0, len = cpus.length; i < len; i++) {
    console.log("CPU %s:", i);
    var cpu = cpus[i], total = 0;

    for(var type in cpu.times) {
        total += cpu.times[type];
    }

    for(type in cpu.times) {
        console.log("\t", type, Math.round(100 * cpu.times[type] / total));
    }
}

function returnTime(ss){
    var hh = parseInt(ss/3600);
    ss -= hh * 3600;
    var mm = parseInt(ss/60);
    ss -= mm * 60;
    // This formats your string to HH:MM:SS
    var t = hh.toString()+":"+mm.toString()+":"+ss.toString();
    return(t);
}
//Path Module
//Net Module
//DNS module
//Domain module

