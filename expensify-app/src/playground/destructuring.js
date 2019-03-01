/**
 * Object destructuring 
 */

// const person = {
//     name: 'Kara',
//     age: 26,
//     location: {
//         city: 'Ottawa',
//         temp: -3
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

/**
 * Array destructuring 
 */

 const address = ['170 Tunneys Pasture', 'Ottawa', 'Ontario', 'K1Y 1H2'];
 const [, city, province = 'New York'] = address;
 console.log(`You are in ${city}, ${province}.`);


 const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
 const [name, , priceMed] = item;
 console.log(`A medium ${name} costs ${priceMed}.`);

 