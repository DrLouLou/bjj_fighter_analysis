import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";


import generalFilterReducer from "./generalFilter/generalFilterSlice";
import themeReducer from "./theme/themeSlice";
import userReducer from "./user/userSlice";
import { fighterDataApi } from "@/Tabs/FighterTab/_redux/fighterDataApi";

// Setup redux-first-history
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });
export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      routerMiddleware,
      fighterDataApi.middleware,
    ]),

  reducer: combineReducers({
    // Redux-first-history reducers
    router: routerReducer,

    // General reducers
    theme: themeReducer,
    user: userReducer,
    generalFilter: generalFilterReducer,

    // API reducers
    [fighterDataApi.reducerPath]: fighterDataApi.reducer,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export const history = createReduxHistory(store);
