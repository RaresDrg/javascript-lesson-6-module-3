/*Example 4 - Destructuring

Rewrite the function so that it accepts a parameters object with properties
companyName and stock and display a report about the number of goods in the
warehouse of any companies.
*/

function getStockReport(stockReport) {
  const { companyName, stock } = stockReport;

  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  
  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: "Belacci",
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"


/*
  ^ Creare unei variabile cu valoarea de obiect -->
  ^ apelare functiei cu variabila (nu cu proprietatiile obiectului)
*/

const obiectTrimisFunctiei = {
  companyName: "Forta Steaua",
  stock: {
    repairBots: 150,
    defenceBots: 50,
    attackBoots: 20,
    yellowBoots: 10,
  },
};

console.log(getStockReport(obiectTrimisFunctiei));