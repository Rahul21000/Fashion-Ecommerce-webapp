import { createSlice } from "@reduxjs/toolkit";

// const sigupUser = createAsyncThunk('signup', async (data) => {
//     const response = await fetch('/api/signup/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     });
//     const newData = await response.json();
//     return newData;
//   });


const initialState={
    isLoggedIn:false,
    token:null,
    error:null
}

const AuthSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        signInRequest:(state,action)=>{
        // state.token=action.payload.token;
        // state.isLoggedIn=true;
        state.isLoggedIn=true;

        },
        
        signUpRequest:(state,action)=>{
            state.token=action.payload.token;
        },

        signoutRequest:(state)=>{
            // state.token=null;
            state.isLoggedIn=false;
           },
    }
})

export const {signInRequest,signUpRequest,signoutRequest}=AuthSlice.actions;
export default AuthSlice.reducer;