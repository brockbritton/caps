
//two functions
//one to emit and make the package
//one to handle the delivery message

const event = require('../eventPool.js');
const Chance = require('chance');
const chance = new Chance(Math.random);
//const generatePackage = require('./handler.js');

event.on('create', (payload) => {
  payload = {
    store: payload.store,
    orderId: chance.natural(),
    customer: `${chance.first()} ${chance.last()}`,
    address: chance.address(),
  };
  event.emit('pickup', payload);
});

event.on('delivered', (payload) => {
  console.log('VENDOR: thank you for delivering package', payload.orderId);
});

