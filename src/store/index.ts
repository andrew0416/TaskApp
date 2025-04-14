import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;