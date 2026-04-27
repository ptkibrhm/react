import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading : false
}

//tüm uygulamayı ilgilendiren slice lar için ortak oluşturduk
export const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{

    },
    extraReducers :(builder)=>{

    }
})

export const {}=appSlice.actions;
export default appSlice.reducer