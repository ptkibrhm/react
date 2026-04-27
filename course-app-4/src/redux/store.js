import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    product: productSlice,
  },
});

export default store;
