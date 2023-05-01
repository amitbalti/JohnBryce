// npm i redux, npm i @reduxjs/toolkit

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { SongReducer } from "./SongReducer";
import { CategoriesReducer } from "./CategoriesReducer";

// choose all reducers.....
const reducers = { songs: SongReducer, categories: CategoriesReducer };

// combine all reducers
export const youtube = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //do not look on serialization errors
    }),
});
