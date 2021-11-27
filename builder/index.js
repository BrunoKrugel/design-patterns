var PersonBuilder = require('./PersonBuilder')

// Employees
var sue = new Person('Sue').makeEmployee().makeManager(60).build();
var bill = new Person('Bill').makeEmployee().makePartTime(20).build();

// Shoppers
var charles = new Person('Charles').withMoney(500).withList(['jeans', 'sunglasses']).build();
