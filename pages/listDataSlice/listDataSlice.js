import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"
// import fethcList from './listFethcApi.js'


const initialState = {
    data: [],
    status: 'idle',
};

export const listDataSliceAsync = createAsyncThunk(
    'listDataSlice/fetchList',
    async () => {
        // const response = await axios.get("../api/todo")
        const response = await axios.get("https://mocki.io/v1/373a1065-b035-4ec9-9af2-f0642992c93a")
        return new Promise((resolve) =>
            setTimeout(() => resolve(response.data), 500)
        );
        
    }
);

const listDataSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        clearTodos:(state)=>{
            state.data=[];
            state.status="idle";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(listDataSliceAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(listDataSliceAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(listDataSliceAsync.rejected, (state) => {
                state.status = 'idle';
            })
    },

})

export const { clearTodos } = listDataSlice.actions;
export const selectList = (state) => state.list;

export default listDataSlice.reducer;