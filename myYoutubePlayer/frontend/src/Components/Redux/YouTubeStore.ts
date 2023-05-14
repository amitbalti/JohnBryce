// Install the follwoing: npm i redux, npm i @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";
import { SongReducer } from "./SongReducer";

// What is the relevant reducers?

// Choose all reducers
// Here we define with which reducers we are working with
const reducers = { songs: SongReducer };

// Combine reducers
// Here we are creating the main store - which here I put all the reducers.
export const youtube = configureStore({ reducer: reducers });
