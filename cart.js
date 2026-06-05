function addItem(cart, item, quantity) {
  if (!cart || typeof cart !== "object") {
    return "Invalid cart";
  }

  if (!item || typeof item !== "string") {
    return "Invalid item";
  }

  if (typeof quantity !== "number" || quantity < 0) {
    return "Invalid quantity";
  }

  if (quantity === 0) {
    return cart;
  }

  if (cart[item]) {
    cart[item] += quantity;
  } else {
    cart[item] = quantity;
  }

  return cart;
}

function removeItem(cart, item) {
  if (!cart || typeof cart !== "object") {
    return "Invalid cart";
  }

  if (!item || typeof item !== "string") {
    return "Invalid item";
  }

  if (!cart[item]) {
    return "Item not found";
  }

  delete cart[item];
  return cart;
}

function getTotalItems(cart) {
  if (!cart || typeof cart !== "object") {
    return "Invalid cart";
  }

  let total = 0;

  for (let item in cart) {
    total += cart[item];
  }

  return total;
}

module.exports = {
  addItem,
  removeItem,
  getTotalItems
};
