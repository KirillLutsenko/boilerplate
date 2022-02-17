// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    post: {
        userId: null,
        id:     null,
        title:  '',
        body:   '',
    },
    loading: false,
};

export const postSlice = createSlice<types.PostState, typeof reducers>({
    name: 'post',
    initialState,
    reducers,
});

export const sliceName = postSlice.name;
export const postActions = postSlice.actions;
export default postSlice.reducer;
