import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface reviewState {
    size: number,
    offset:number
  }
  
  const initialState: reviewState = {
    size: 5,
    offset:0
  }

export const fetchReviewList: AsyncThunk<any, void, {}>  = createAsyncThunk(
    "review/fetchReviewList",
    async () => {
        const res = await axios.get(`https://dev.seoltab.com/front_test_review?SIZE=${1}&OFFSET=${100}`)
        return res.data
    }
)

export const reviewSlice = createSlice({
    name:'review',
    initialState,
    reducers: {

    },
    // extraReducers: {
    //     [fetchReviewList.pending] : (state, action) => {
    //         state.status = 'loading'
    //     },
    //     [fetchReviewList.fulfilled] : (state, action) => {
    //         state.status = 'succeeded'
    //         state.value = action.payload
    //     },
    //     [fetchReviewList.rejected] : (state, action) => {
    //         state.status = 'failed'
    //         state.error = action.error.message
    //     }
    // }
})

export const {  } = reviewSlice.actions

export default reviewSlice.reducer