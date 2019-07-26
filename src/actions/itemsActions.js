export const addItem = item => {
  return {
    type: "ADD_ITEMS",
    payload: { item }
  };
};

export const setitems = items => {
  return {
    type: "SET_ITEMS",
    payload: { items }
  };
};
