
const Chance = require('chance');
const chance = new Chance(Math.random);

function generatePackage(storeName) {
  console.log('VENDOR: creating package');
  return {
    store: storeName,
    orderId: chance.natural(),
    customer: `${chance.first()} ${chance.last()}`,
    address: chance.address(),
  };
}

module.exports = generatePackage;
