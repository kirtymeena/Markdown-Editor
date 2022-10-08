import { createSerializableStateInvariantMiddleware, createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice({
    name:'save',
    initialState : {
        save:false,
        delete:false,
        fileName:'welcome'
       

    },
    reducers:{
        updateSave:(state,action) =>{
            state.save = true
            state.delete=false
        },
        deleteFile:(state,action) =>{
            state.delete = true
            state.save = false
            state.fileName = 'welcome'
        },

        updatefileName:(state,action)=>{
            state.fileName = action.payload
        }
       
    }
})

export const {updateSave,deleteFile,updatefileName} = saveSlice.actions
export default saveSlice.reducer