const selectedItemreducer = (selectedItem = null, action) => {
  switch (action.type) {
    case "SELECT_ITEM":
      return action.payload.selectedItem;
    default:
      return selectedItem;
  }
};

export default selectedItemreducer;
