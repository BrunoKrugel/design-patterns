var PersonBuilder = require('./PersonBuilder')

// Employees
var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
//var sue = new Person('Sue', true, true, 60);
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime(20).build();
//var bill = new Person('Bill', true, false, 20);

// Shopper
var charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();
//var charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);