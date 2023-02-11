import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addMovie } = movieSlice.actions

export default movieSlice.reducer