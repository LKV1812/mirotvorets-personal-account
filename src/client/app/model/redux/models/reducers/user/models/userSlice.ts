import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser, ErrorType, IUserQuery} from './types';

const initialState: IUserQuery = {
    user: {
        firstName: '',
        lastName: '',
        addresses: [{address: '', coords: [0, 0]}],
        phones: {
            main: 0
        }
    },
    isLoading: false,
    error: '',
    userDataUploadIsSuccess: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        queryUser(state) {
            state.isLoading = true
        },
        queryUserSuccess(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        queryUserError(state, action: PayloadAction<ErrorType>) {
            state.error = action.payload
        }
    }
})

export default userSlice.reducer