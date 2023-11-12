import { createSlice } from "@reduxjs/toolkit";

const initialvalues = {
    loading: false,
    user: {}
};


export const userSlice = createSlice({
    name: 'userslice',
    initialState: initialvalues,
    reducers: {
        addUser: (state) => {

        }
    }
    , extraReducers: (builder) => {
    }

});

export const { addUser } = userSlice.actions;
export default userSlice.reducer