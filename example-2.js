/*Example 2 - Destructuring

Rewrite the function so that it takes one object of the parameter instead
of a set of independent arguments.
*/

/*
  *RORO --> receive an object, return an object
*/

function printContactsInfo(contactsInfo) {
  const { names, phones, } = contactsInfo;

  const nameList = names.split(",");
  const phoneList = phones.split(",");

  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});



/*
  *It was
*/

// function printContactsInfo(names, phones) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );