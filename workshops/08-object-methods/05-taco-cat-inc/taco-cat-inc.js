let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function () {
  let totalValue = 0;
  for (let key in this) {
    if (key === "cash") {
      continue;
    }
    let items = this[key];
    for (let itemName in items) {
      item = items[itemName];
      totalValue += item.cost * item.quantity;
    }
  }
  return totalValue;
};
tacoCatInc.sale = function (order) {
  let finalPrice = 0;
  for (let category in order) {
    let choice = order[category];
    finalPrice += this[category][choice].cost;
    this.cash += this[category][choice].cost;
    this[category][choice].quantity--;
  }
  return finalPrice;
};
