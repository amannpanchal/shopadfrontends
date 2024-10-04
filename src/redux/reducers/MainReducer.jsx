import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "counter",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        onLoadRequest: (state) => {
            state.loading = true;
        },
        onLoadSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        onLoadFailure: (state, action) => {
            state.data = [];
            state.error = action.payload;
        }
    }
});

export const { onLoadRequest, onLoadSuccess, onLoadFailure } = dataSlice.actions;
export default dataSlice;
