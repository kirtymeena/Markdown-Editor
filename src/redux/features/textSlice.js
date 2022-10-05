import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: 'text',
    initialState: {
        text: " "
    },
    reducers: {
        saveInput: (state, action) => {
            state.text = action.payload
        },
        deleteText:(state,action) =>{
            state.text = action.payload
        }

        

    }
})

export const { saveInput, deleteText } = textSlice.actions
export default textSlice.reducer