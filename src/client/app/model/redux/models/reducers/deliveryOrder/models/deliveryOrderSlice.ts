import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDeliveryReducer} from './types';

const initialState: IDeliveryReducer = {
    error: '',
    isSending: false,
    isOpen: false
}

export const deliveryOrderSlice = createSlice({
    name: 'deliveryOrder',
    initialState,
    reducers: {
        toggleDeliveryFrom(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload
        }
    }
})

export default deliveryOrderSlice.reducer