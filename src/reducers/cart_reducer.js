import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      const { id, color, amount, product } = action.payload;
      const newValue = state.cart.find((item) => item.id === id + color);
      if (newValue) {
      } else {
        const item = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, item] };
      }
    // eslint-disable-next-line no-fallthrough
    case "removeCartItem":
      const { id: cartId } = action.payload;
      const filteredItem = state.cart.filter((item) => item.id !== cartId);
      return { ...state, cart: filteredItem };
    case "clearCart":
      return { ...state, cart: [] };
    default:
      return state;
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
