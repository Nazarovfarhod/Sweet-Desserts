import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allDesserts: [],
  ordered: [],
  orderTotal: 0,
  priceTotal: 0,
};

export const dessertSlice = createSlice({
  name: "dessert",
  initialState,
  reducers: {
    deleteOrder: (state, { payload }) => {
      let item = state.allDesserts.find((dessert) => dessert.id == payload);
      if (item) {
        item.amount = 0;
      }
      dessertSlice.caseReducers.calculateTotal(state);

    },

    addAllDesserts: (state, { payload }) => {
      state.allDesserts = payload;
    },
    incrementOrder: (state, { payload }) => {
      const item = state.allDesserts.find((dessert) => dessert.id === payload);

      if (!item.amount) {
        item.amount = 1;
      } else {
        item.amount += 1;
      }

      dessertSlice.caseReducers.calculateTotal(state);
    },
    decrementOrder: (state, { payload }) => {
      const item = state.allDesserts.find((dessert) => dessert.id === payload);

      item.amount -= 1;
      dessertSlice.caseReducers.calculateTotal(state);
    },
    clearOrder: (state) => {
      state.allDesserts.forEach((dessert) => {
        dessert.amount = 0;
      });
    },
    calculateTotal: (state) => {
      state.ordered = state.allDesserts.filter((dessert) => dessert.amount);

      let allOrdersAmount = 0;
      let allOrderPrice = 0;
      state.ordered.forEach((order) => {
        allOrdersAmount += order.amount;
        allOrderPrice += order.amount * order.price;
      });

      state.orderTotal = allOrdersAmount;
      state.priceTotal = allOrderPrice;
    },
  },
});

export const { deleteOrder, decrementOrder, incrementOrder, addAllDesserts } =
  dessertSlice.actions;

export default dessertSlice.reducer;
