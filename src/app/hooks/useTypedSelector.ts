import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducerType} from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector