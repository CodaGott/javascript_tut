const customers = ['Max', 'Manuel', 'Anna', 'Ebuka'];

const activeCustomer = ['Max', 'Manuel'];

const inactiveCustomers = _.difference(customers, activeCustomer);
console.log(inactiveCustomers);
