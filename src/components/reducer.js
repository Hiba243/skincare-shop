export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price * item.amount) + amount, 0);

const reducer = (state, action) => {

  switch (action.type) {
    case "ADD_TO_BASKET":
      const existingCartItemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.basket[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.basket];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.basket.concat(action.item);
      }
      return {
        ...state,
        basket: updatedItems,
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case "REMOVE_FROM_BASKET":
      const existingCartItemIndexForRemove = state.basket.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.basket[existingCartItemIndexForRemove];
      let updatedItemsForRemove;
      if (existingItem.amount === 1) {
        updatedItemsForRemove = state.basket.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItemsForRemove = [...state.basket];
        updatedItemsForRemove[existingCartItemIndexForRemove] = updatedItem;
      }

      return {
        ...state,
        basket: updatedItemsForRemove,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;