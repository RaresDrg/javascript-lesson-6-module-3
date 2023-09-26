/*Example 3 - Deep destructuring

Write a function `calcTotalPrice(stones, stoneName)` that takes an array
of objects and a string with the name of the stone. The function calculates and returns
the total cost of stones with the same name, price and quantity from the object.
*/

/*
  *RORO --> receive an object, return an object
*/

function getBotReport(botReport) {
  const { companyName, bots } = botReport; 
  const { repair: repairBots, defence: defenceBots } = bots;
  // const { companyName, bots: { repair: repairBots, defence: defenceBots } } = botReport; 
  
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    bots: {
      repair: 150,
      defence: 50,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"



/*
  *It was
*/

// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport('Cyberdyne Systems', 150, 50));