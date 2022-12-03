import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootStateT, AppDispatchT } from ".";

export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;
export const useAppDispatch: () => AppDispatchT = useDispatch;
