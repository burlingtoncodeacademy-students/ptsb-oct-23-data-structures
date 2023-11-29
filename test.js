const myBmw = {
  make: 'BMW',
  model: 'M6',
  color: 'grey',
  year: 'year',
  features: ['AC', 'Steering Wheel', 'Flying'],
};

myBmw.features.forEach((feature) => console.log(feature));
console.log(myBmw.model);
console.log(myBmw['features'][1]);
