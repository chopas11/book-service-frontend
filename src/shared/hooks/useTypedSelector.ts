import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducerType} from "../../app/providers/store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector