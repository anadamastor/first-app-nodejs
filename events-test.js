const EventEmitter = require('events'); 

const Logger = require('./logger');
const logger = new Logger();


// listener
logger.on('Logging', (arg) => {
  console.log('logging success', arg.data);
});

logger.log('message');