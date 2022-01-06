'use strict';
const automobile = {
  cName: 'Suzuki',
  location: '403, St:landhi, Malir, Karachi.',
  categories: ['hatchback', 'sedan', 'suv'],
  hatchBack: ['mehran', 'alto', 'cultus'],
  sedan: ['baleeno', 'liana', 'ciaz'],
  suv: ['vitara', 'suzuki cross'],
  orderCar(starterIndex, mainIndex) {
    return [this.hatchBack[starterIndex], this.suv[mainIndex]];
  },
  carCategory(cat1, cat2, cat3) {
    console.log(`The categories are ${cat1} ${cat2} ${cat3}`);
  },
  openHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 12,
      close: 23,
    },
    saturday: {
      open: 0, //open 24*7
      close: 24,
    },
  },
  totalBooking(...orders) {
    let sum = 0;
    for (let i = 0; i < orders.length; i++) {
      sum += orders[i];
    }
    return sum;
  },
};

//using rest pattern to pack elements into an array
const [a, b, ...others] = [1, 2, [3, 4, 5], 6, 7];
console.log(a, b);
console.log(...others);

//using Rest and Spread together
const [mehran, , ...rest] = [...automobile.hatchBack, ...automobile.sedan];
console.log(mehran, rest);

//using Rest with objects
const { thursday, ...weekdays } = { ...automobile.openHours };
console.log(thursday, weekdays);

//using Rest with Functions
console.log('----Rest with Functions----');
console.log(automobile.totalBooking(1, 2));
console.log(automobile.totalBooking(1, 2, 3));
console.log(automobile.totalBooking(1, 2, 3, 4));
