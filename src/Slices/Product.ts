import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        sanpham:{},
    },
    reducers: {
        saveProduct: ( state,action) => {
            state.sanpham = action.payload
        },
       
        
    },
})
export const { saveProduct} = ProductSlice.actions;
export default ProductSlice.reducer;