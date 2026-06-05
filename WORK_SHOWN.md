# Work Shown

## Original Goal
The goal was to practice test-driven development by creating a shopping cart module and writing unit tests.

## My Module Plan
The cart is an object.

Example:

{
  apple: 3,
  banana: 2
}

## addItem Logic
1. Check that cart is valid.
2. Check that item is valid.
3. Check that quantity is valid.
4. If quantity is 0, do not change the cart.
5. If item already exists, add to the quantity.
6. If item does not exist, create it.

## removeItem Logic
1. Check that cart is valid.
2. Check that item is valid.
3. If item does not exist, return "Item not found".
4. If item exists, delete it.

## getTotalItems Logic
1. Start total at 0.
2. Loop through the cart.
3. Add each quantity to total.
4. Return total.

## Why node_modules Is Not Included
node_modules is not pushed to GitHub because it is large and can be recreated with npm install.

## Important Files
package.json keeps track of the project.
package-lock.json keeps track of exact installed versions.
cart.js holds the module.
cart.test.js holds the tests.
