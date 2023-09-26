/*Example 8 - practica: Object

  //* In principiu, acelasi lucru ca la exemplul precedent
*/

const originalObject = {
  name: "Sergiu",
  age: 25,
  address: {
    city: "London",
    zip: 500500,
  },
};

const fakeObject = originalObject;
const copyObject = { ...originalObject };
// const copyObject = { ...originalObject, address: { ...originalObject.address } };


copyObject.prenume = "dani";

fakeObject.address.city = "D"    // Nested object --> //! Atentie aici //

//! Copierea obiectelor nested: //
// const copyObject = { ...originalObject, address: { ...originalObject.address } };


console.log(originalObject)
console.log(fakeObject)
console.log(copyObject)