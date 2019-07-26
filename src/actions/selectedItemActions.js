export const selectItem = selectedItem => {
  // Return an action
  return {
    type: "SELECT_ITEM",
    payload: { selectedItem }
  };
};
