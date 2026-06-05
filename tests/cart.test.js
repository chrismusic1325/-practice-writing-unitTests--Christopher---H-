const { addItem, removeItem, getTotalItems } = require("../cart");

describe("Shopping Cart Module", () => {
  test("addItem positive: adds a new item with valid quantity", () => {
    const cart = {};
    addItem(cart, "apple", 3);
    expect(cart).toEqual({ apple: 3 });
  });

  test("addItem negative: rejects negative quantity", () => {
    const cart = {};
    const result = addItem(cart, "apple", -2);
    expect(result).toBe("Invalid quantity");
    expect(cart).toEqual({});
  });

  test("addItem edge case: quantity of 0 does not change cart", () => {
    const cart = {};
    addItem(cart, "apple", 0);
    expect(cart).toEqual({});
  });

  test("removeItem positive: removes an existing item", () => {
    const cart = { apple: 3, banana: 2 };
    removeItem(cart, "apple");
    expect(cart).toEqual({ banana: 2 });
  });

  test("removeItem negative: handles item not in cart", () => {
    const cart = { apple: 3 };
    const result = removeItem(cart, "banana");
    expect(result).toBe("Item not found");
    expect(cart).toEqual({ apple: 3 });
  });

  test("removeItem edge case: removes the last item from cart", () => {
    const cart = { apple: 3 };
    removeItem(cart, "apple");
    expect(cart).toEqual({});
  });

  test("getTotalItems positive: calculates total correctly", () => {
    const cart = { apple: 3, banana: 2 };
    expect(getTotalItems(cart)).toBe(5);
  });

  test("getTotalItems negative: handles an empty cart", () => {
    const cart = {};
    expect(getTotalItems(cart)).toBe(0);
  });

  test("getTotalItems edge case: calculates large quantities", () => {
    const cart = { apple: 1000000, banana: 2000000 };
    expect(getTotalItems(cart)).toBe(3000000);
  });
});
