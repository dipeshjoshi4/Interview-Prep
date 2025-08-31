
var a = 1078698;
var b = 20986;

https.get("https://api.fbi.com", (res) => { console.log(res?.secret) });

setTimeout(() => { console.log(setTimeout) }, 5000);

fs.readfile("./gossip.txt", "utf8", (data) => { console.log("File Data", data) });

function multiplyFn(x, y) {
    const result = a * b;
    return result
}
var c = multiplyFn(a, b)
console.log(c);