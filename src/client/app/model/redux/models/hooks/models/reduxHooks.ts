import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppDispatchType, RootReducerType} from '../../store';

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector