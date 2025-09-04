import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    numofcakes:20
}

const cakeslice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered: state =>{
            state.numofcakes--
        },
        restocked:(state,action) => {
            state.numOfCakes++
        }
    }
})

export default cakeslice.reducer;
export const {ordered,restocked} = cakeslice.actions