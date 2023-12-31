import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload=newItem
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
        return;
      }
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload=pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    reduceByOne(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.pizzaId !== action.payload,
          );
          return;
        }
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    increaseByOne(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    increaseItemQuantity(state, action) {
      // payload=pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload=pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity == 1) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
        return;
      }
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  reduceByOne,
  increaseByOne,
} = cartSlice.actions;
export default cartSlice.reducer;
export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getCart = (state) => state.cart.cart;
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id);
