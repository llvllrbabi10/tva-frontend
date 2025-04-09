import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
// import { pokemonApi } from "./services/pokemon-service";
// import { userApi } from "./services/user-service";

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            // [pokemonApi.reducerPath]: pokemonApi.reducer,
            // [userApi.reducerPath]: userApi.reducer,
        },
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware().concat(
        //         pokemonApi.middleware,
        //         userApi.middleware
        //     ),
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
