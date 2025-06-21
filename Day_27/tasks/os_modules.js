

const os = require('os');

console.log("Platform       :", os.platform());    
console.log("Architecture   :", os.arch());           
console.log("CPU Info       :", os.cpus());           
console.log("Free Memory    :", os.freemem(), "bytes");
console.log("Total Memory   :", os.totalmem(), "bytes");
console.log("Uptime (sec)   :", os.uptime());
console.log("User Info      :", os.userInfo());
console.log("Hostname       :", os.hostname());
console.log("Network Interfaces:", os.networkInterfaces());
