
//two functions
//one to emit and make the package
//one to handle the delivery message

const event = require('../eventPool.js');
const generatePackage = require('./handler.js');

event.on('delivered', (payload) => {
  console.log('VENDOR: thank you for delivering package', payload.orderId);
});

//call vendor order to pick up package
event.emit('pickup', generatePackage('1-206-flowers'));
