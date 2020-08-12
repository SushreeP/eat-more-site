export const increment = (i) => {
  return {
    type: "INCREMENT",
    payload: {
      index: i,
    },
  };
};

export const decrement = (i) => {
  return {
    type: "DECREMENT",
    payload: {
      index: i,
    },
  };
};

export const add_item = (name) => {
  return {
    type: "ADD_ITEM",
    payload: {
      name: name,
      noplates: 1,
      price: 2.49,
    },
  };
};
