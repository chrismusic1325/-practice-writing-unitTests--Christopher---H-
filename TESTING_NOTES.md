# Testing Notes

## addItem Tests

Positive:
- Add apple with quantity 3.

Negative:
- Try to add apple with quantity -2.

Edge Case:
- Try to add apple with quantity 0.

## removeItem Tests

Positive:
- Remove apple from a cart that has apple and banana.

Negative:
- Try to remove banana when banana is not in the cart.

Edge Case:
- Remove the last item from the cart.

## getTotalItems Tests

Positive:
- Add the quantities together.

Negative:
- Empty cart returns 0.

Edge Case:
- Large quantities still calculate correctly.
