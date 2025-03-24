import {createSlice} from '@reduxjs/toolkit';

export const BonhoSlice = createSlice({
    name: 'bonho',
    initialState: {
        user:'',
        email:'',
        password:'',
        typePassword:'',
        save: 0,
    },
    reducers: {
        saveUser: ( state,action) => {
            state.user = action.payload.saveuser
        },
        saveEmail: (state, action) => {
            state.email = action.payload.saveemail;
        },
        savePassword: (state, action) => {
            state.password = action.payload.savepassword;
        },
        saveTypepassword: (state, action) => {
            state.typePassword = action.payload.savetypepassword
        },
        resetNguoidung: ( state,action) => {
            state.user = '',
            state.email=''
        },
        
    },
})
export const { saveUser, saveEmail, savePassword,saveTypepassword } = BonhoSlice.actions;
export default BonhoSlice.reducer;