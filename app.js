const path = require('path'); // load build-in module 
var pathObj = path.parse(__filename);
console.log(pathObj);

const logger = require('./logger')

// in browser you have window objects
// so in browser they will all becmoe
// window.objects
// in node we have global instead of window.
// 19 min
// https://www.youtube.com/watch?v=TlB_eWDSMt4

console.log(logger);
// logger.log('message'); 

