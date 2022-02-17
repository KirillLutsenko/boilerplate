// Core
import { createAction } from '@reduxjs/toolkit';

// Slice
import { sliceName } from '../slice';

export const fetchPostAction = createAction<number>(`${sliceName}/FETCH_POST_ASYNC`);
