
import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from '../Reducer/Reducer'; 

const store = configureStore({
    reducer: {
        counter: CounterSlice, 
    },
});

export default store;
