/*Example 5 - operation Spread

Extend the `createContact(partialContact)` function so that it returns a new
contact object with `id` and `createdAt` properties added, as well as `list` with
value "default" if there is no such property in `partialContact`.
*/

function generateId() {
  return Math.random() + "Random";
}

function createContact(partialContact) {

  const { id, createdAt, list = "default" } = partialContact;

  return {
    id: generateId(),
    createdAt: Date.now(),
    list: "default",
    ...partialContact,
  };
}

console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);

console.log(
  createContact({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);