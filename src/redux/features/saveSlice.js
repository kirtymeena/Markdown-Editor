import { createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice({
    name:'save',
    initialState : {
        save:false,
        delete:false,
       

    },
    reducers:{
        updateSave:(state,action) =>{
            state.save = true
            state.delete=false
        },
        deleteFile:(state,action) =>{
            state.delete = true
            state.save = false
        },
       
    }
})

export const {updateSave,deleteFile} = saveSlice.actions
export default saveSlice.reducer