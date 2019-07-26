const itemsReducer = (items = [], action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return action.payload.items;
    case "ADD_ITEMS":
      return [...items, action.payload.item];
   default:
      return items;
  }
};

export default itemsReducer;
