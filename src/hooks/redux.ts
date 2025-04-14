import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypeDispatch =  () => useDispatch<AppDispatch>;

