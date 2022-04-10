const singleton = require('./singleton');

const instanceOne = new singleton('blah');
const instanceTwo = new singleton('nope');

console.log(instanceOne.getName());
console.log(instanceTwo.getName());