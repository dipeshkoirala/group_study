import { createStore } from "redux";
import { MovieReducer } from "./MovieReducer";

export const MoviesDataStore = createStore(MovieReducer);
