const EventEmitter = require('events'); // events class


var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
 log(message) {
  // send an http request
  console.log(message);
  this.emit('Logging', {data:"Good morning!"});
  } 
}


// both log function and url variable are private

// we need to export to the outside
module.exports = Logger;
