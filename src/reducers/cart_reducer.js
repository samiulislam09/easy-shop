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
    case "toggleCartAmount":
      const { id: toggleId, value } = action.payload;
      console.log("object,", toggleId, value);
      const tempCart = state.cart.map((item) => {
        if (item.id === toggleId) {
          if (value === "increase") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (value === "decrease") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    case "countCartTotal":
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.totalItems += amount;
          total.totalAmount += price * amount;
          return total;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItems, totalAmount };

    default:
      return state;
  }
};

export default cart_reducer;
