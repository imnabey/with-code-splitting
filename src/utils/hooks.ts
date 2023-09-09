import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from 'react';

import type { RootState, AppDispatch } from "src/store"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
