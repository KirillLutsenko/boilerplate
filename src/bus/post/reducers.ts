// Types
import * as types from './types';

export const setPost: types.SetPostContract = (state, action) => {
    return { ...state, post: action.payload };
};

export const setLoading: types.SetLoadingContract = (state, action) => {
    return { ...state, loading: action.payload };
};

