import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        year: "Year",
        color: "Color",
        
    },
    reducers: {
        choosemake: (state, action) => { state.make = action.payload},
        choosemodel: (state, action) => { state.model = action.payload},
        chooseyear: (state, action) => { state.year = action.payload},
        choosecolor: (state, action) => { state.color = action.payload}
        
    }
})

export const reducer = rootSlice.reducer;
export const { choosemake, choosemodel, chooseyear, choosecolor } = rootSlice.actions