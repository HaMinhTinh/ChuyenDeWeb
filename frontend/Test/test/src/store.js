import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../Test/test/src/features/cart/cartSlice";
import wishlistReducer from "../../Test/test/src/features/wishlist/wishlistSlice";
import authReducer from "../../Test/test/src/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});