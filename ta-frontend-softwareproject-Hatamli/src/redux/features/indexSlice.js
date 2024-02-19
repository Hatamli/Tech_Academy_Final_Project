import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    likes: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const orders = JSON.parse(
        localStorage.getItem("products")
          ? localStorage.getItem("products")
          : "[]"
      );
      const existingItem = orders.some((item) => item.id == id);
      if (existingItem) {
        orders.filter((item) => item.id == id)[0].quantity++;
      } else {
        orders.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("products", JSON.stringify(orders));
      state.items = orders;
    },
    decrementQuantity: (state, action) => {
      let orders = JSON.parse(
        localStorage.getItem("products")
          ? localStorage.getItem("products")
          : "[]"
      );
      orders.filter((item) => item.id == action.payload)[0].quantity--;
      localStorage.setItem("products", JSON.stringify(orders));
      state.items = orders;
    },
    removeFromCart: (state, action) => {
      let orders = JSON.parse(
        localStorage.getItem("products")
          ? localStorage.getItem("products")
          : "[]"
      );
      orders = orders.filter((item) => item.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(orders));
      state.items = orders;
    },
    addToLike: (state, action) => {
      const { id } = action.payload;
      const likes = JSON.parse(
        localStorage.getItem("likes") ? localStorage.getItem("likes") : "[]"
      );
      const existingItem = likes.some((item) => item.id == id);
      if (existingItem) {
      } else {
        likes.push(action.payload);
      }
      localStorage.setItem("likes", JSON.stringify(likes));
      state.likes = likes;
    },
    removeLike: (state, action) => {
      let likes = JSON.parse(
        localStorage.getItem("likes") ? localStorage.getItem("likes") : "[]"
      );
      likes = likes.filter((item) => item.id !== action.payload);
      localStorage.setItem("likes", JSON.stringify(likes));
      state.likes = likes;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  addToLike,
  removeLike,
} = cartSlice.actions;
