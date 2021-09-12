import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
//import reducers from "../reducers";
import cartReducer from '../reducers/cart';
import productReducer from '../reducers/product';
import wishReducer from '../reducers/wishlist';
import demoReducer from '../reducers/demo';
import compareReducer from '../reducers/compare';
import filtersReducer from '../reducers/filter';
import AuthReducer from '../features/Auth/authSlice';


const store = configureStore({
  reducer: {
    cartList: cartReducer,
    data: productReducer,
    wishlist: wishReducer,
    demo: demoReducer,
    compareList: compareReducer,
    filter: filtersReducer,
    Auth : AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore( store );
export default store;
