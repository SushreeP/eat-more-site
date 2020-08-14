const initCart = {
  list: [],
};

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    /* Increment amount of selected item on cart */

    case "INCREMENT":
      const updateIncr = {
        name: state.list[action.payload.index].name,
        noplates: state.list[action.payload.index].noplates + 1,
        price: ((state.list[action.payload.index].noplates + 1) * 2.49).toFixed(
          2
        ),
      };
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.payload.index), // list before the element
          updateIncr, // updating the element
          ...state.list.slice(action.payload.index + 1), // list after the element
        ],
      };

    /* Decrement amount of selected item on cart */

    case "DECREMENT":
      const updateDecr = {
        name: state.list[action.payload.index].name,
        noplates: state.list[action.payload.index].noplates - 1,
        price: ((state.list[action.payload.index].noplates - 1) * 2.49).toFixed(
          2
        ),
      };

      /* If amount is reduced to zero remove item */

      if (state.list[action.payload.index].noplates === 1) {
        return {
          ...state,
          list: [
            ...state.list.slice(0, action.payload.index), // list before the element
            ...state.list.slice(action.payload.index + 1), // list after the element
          ],
        };
      } else {
        /* Or else decrement amount */
        return {
          ...state,
          list: [
            ...state.list.slice(0, action.payload.index), // list before the element
            updateDecr, // updating the element
            ...state.list.slice(action.payload.index + 1), // list after the element
          ],
        };
      }

    /* Add  new item to cart */

    case "ADD_ITEM":
      return {
        ...state,
        list: [
          ...state.list,
          {
            name: action.payload.name,
            noplates: action.payload.noplates,
            price: action.payload.price,
          },
        ],
      };
    default:
      return state;
  }
};

export default cartReducer;
