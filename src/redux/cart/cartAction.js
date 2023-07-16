const addItem = (products) => {
  return {
    type: "ADD_ITEM",
    payload: products,
  };
};

const removeItem = (products) => {
  return {
    type: "REMOVE_ITEM",
    payload: products,
  };
};

const increase = (products) => {
  return {
    type: "INCREASE",
    payload: products,
  };
};

const decrease = (products) => {
  return {
    type: "DECREASE",
    payload: products,
  };
};

const checkout = (products) => {
  return {
    type: "CHECKOUT",
    payload: products,
  };
};

const clear = (products) => {
  return {
    type: "CLEAR",
    payload: products,
  };
};

export { addItem, removeItem, clear, checkout, increase, decrease };
