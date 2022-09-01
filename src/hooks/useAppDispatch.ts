import { useDispatch } from "react-redux";
import type { AppDispatch } from "reduxState/store";
export const useAppDispatch: () => AppDispatch = useDispatch;
