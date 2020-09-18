var buff1 = new Buffer.alloc(10);
var buff2 = new ArrayBuffer([10, 20, 30, 40 , 50]);
var buff3 = new Buffer.alloc(21, "Simply Easy Learning", "utf-8");

console.log("Buff1:", buff1,"\nBuff2:", buff2,"\nBuff3:", buff3);

buf = new Buffer.alloc(256);
len = buf.write("Simply Easy Learning");
console.log("Octets written : ", len);

buf = new Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));   //outputs
// abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii', 0, 5)); //outputs abcde
console.log( buf.toString('utf8', 0, 5)); //outputs abcde
console.log( buf.toString(undefined, 0, 5)); //encoding defaults to utf8
// outputs abcde

var buffer1 = new Buffer.alloc(3, 'ABC');
//copy a buffer
var buffer2 = new Buffer.alloc(3);
console.log("buffer 2 content: " + buffer2.toString());
buffer1.copy(buffer2);
console.log("buffer 2 content: " + buffer2.toString());