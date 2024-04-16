
const event = require('./eventPool.js');

function defineEventMessage(payload, type) {
  console.log({
    event: type,
    time: new Date().toISOString(),
    payload: payload,
  });
}

event.on('pickup', (payload) => {
  defineEventMessage(payload, 'pickup');
});

event.on('inTransit', (payload) => {
  defineEventMessage(payload, 'in-transit');
});

event.on('delivered', (payload) => {
  defineEventMessage(payload, 'delivered');
});

require('./driver');
require('./vendor');

//call vendor order to pick up package
event.emit('create', { store: '1-206-flowers' });