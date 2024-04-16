
const event = require('../eventPool.js');
//listen for pickup event
//when in transit, let know 

event.on('pickup', (payload) => {
  console.log('DRIVER: picked up package', payload.orderId);
  event.emit('inTransit', payload);
  console.log('DRIVER: delivered package', payload.orderId);
  event.emit('delivered', payload);
});
  