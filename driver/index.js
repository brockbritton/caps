
const event = require('../eventPool.js');

event.on('pickup', (payload) => {
  console.log('DRIVER: picked up package', payload.orderId);
  event.emit('inTransit', payload);
  console.log('DRIVER: delivered package', payload.orderId);
  event.emit('delivered', payload);
});
  