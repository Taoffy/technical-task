import {configureStore} from "@reduxjs/toolkit";

import forumReducer from "./forum/forum.slice";

const store = configureStore({devTools: true, reducer: {forum: forumReducer}});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
