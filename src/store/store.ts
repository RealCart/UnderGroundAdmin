import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "@/src/store/user/userSlice";
import {userAPI} from "@/src/services/userService";

const rootReducer = combineReducers({
    userReducer,
    [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
