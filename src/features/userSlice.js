import { createSlice } from '@reduxjs/toolkit';
import { getToken } from "../services/storage";

const initialState = {
    token : getToken(),
    userData : {
        firstName : '',
        lastName : ''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        updateToken : (state, action) =>{
            state.token = action.payload
        },
        deleteUserToken : (state) => {
            state.token = null
        },
        setUserData : (state, action) =>{
            state.userData.firstName = action.payload.firstName
            state.userData.lastName = action.payload.lastName
        }
    }
});

export const { updateToken , deleteUserToken, setUserData } = userSlice.actions;

export default userSlice.reducer;