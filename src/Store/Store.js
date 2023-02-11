import { configureStore } from "@reduxjs/toolkit";
import movieSlice  from "../slice/RecipeSlice";

export const Store = configureStore({
    reducer: {
        movieAdd : movieSlice
    },
  })