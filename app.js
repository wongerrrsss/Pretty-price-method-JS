const prettyPrice = (grossPrice, newPrice) => {
    if (Number.isInteger(newPrice)) {
      newPrice = newPrice * 0.01
    }
    return Math.floor(grossPrice) + newPrice;
  }
  
  // DECIMAL
  console.log(prettyPrice(900, 0.75))
  console.log(prettyPrice(10.32, 0.75))
  // WHOLE NUMBER
  console.log(prettyPrice(150.15, 75))
  console.log(prettyPrice(89.50, 75))