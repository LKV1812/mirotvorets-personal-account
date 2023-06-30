import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {deliveryOrder, user} from './reducers'

const rootReducer = combineReducers({
    user,
    deliveryOrder
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootReducerType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']