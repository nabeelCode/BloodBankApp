import { configureStore } from '@reduxjs/toolkit'
//reducers
import PanchayathReducer from './PanchayathSlice'
import DonorSlice from './DonorSlice'

export default configureStore({
    reducer:{
        panchayath: PanchayathReducer,
        donors: DonorSlice
    }
})