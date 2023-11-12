const { createAsyncThunk } = require("@reduxjs/toolkit");
const { axiosInstance } = require("../../axios");



// export const loginUser = createAsyncThunk('login', async (data) => {

//     console.log('in here');
//     try {
//         const da = await axiosInstance.post('/create', data);
//         console.log(data);
//         return data

//     } catch (error) {
//         console.log();

//     }

// })