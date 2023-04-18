const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701'
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25
      },
      pepperoni: {
        amount: 1,
        price: 20
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5
    }
  },
  payment: {
    total: 60
  }
};

function customerInfo (order) {
  console.log(`Hi, ${order.order.delivery.deliveryPerson}, delivery for: ${order.name}, phone: ${order.phoneNumber}, S. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

function orderModifier (order) {
  const newBuyer = order.name = 'Luiz Silva';
  const newTotal = order.payment.total = '50';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  console.log('Hi, ' + newBuyer + ', your delivery ' + pizzas[0] + ', ' + pizzas[1] + ' and ' + drinks + ' is $ ' + newTotal + ',00.');
}

orderModifier(order);
