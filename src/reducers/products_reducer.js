const products_reducer = (state, action) => {
  switch (action.type) {
    case "sidebar_open":
      return { ...state, isOpen: true };
    case "sidebar_close":
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default products_reducer;
