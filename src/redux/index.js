import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import cars from "./cars";

const rootReducer = combineReducers({
    reducer,
    cars
})

export const store = configureStore({
    reducer: rootReducer
})




