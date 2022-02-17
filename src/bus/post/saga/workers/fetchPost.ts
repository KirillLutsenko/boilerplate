// Actions
// import { postActions } from '../../slice';
import * as sagaActions from '../sagaActions';

// Tools
import * as API from '../api';
import { call, put, delay } from 'redux-saga/effects';

// Types
import { Post } from '../../types';
// Action
import { postActions } from '../../slice';

export function* fetchPost(action: ReturnType<typeof sagaActions.fetchPostAction>) {
    console.log('🚀action', action);
    try {
        yield put(postActions.setLoading(true));
        const response: Post = yield call(() => API.fetchPost(action.payload));
        yield delay(500);
        yield put(postActions.setPost(response));
    } catch (error) {
        console.error(error);
    } finally {
        yield put(postActions.setLoading(false));
    }
}

// export function* fetchPost(action: ReturnType<typeof sagaActions.fetchPostAction>) {
//     console.log('🚀action', action);

//     const result: Post | null = yield makeRequest<Post>({
//         togglerAction:     postActions.setLoading,
//         fetcher:           () => API.fetchPost(action.payload),
//         succesAction:      postActions.setPost,
//         delayTime:         1000,
//         successSideEffect: function* (result) {
//             yield console.log('successSideEffect', result);
//         },
//     });

//     if (result !== null) {
//         console.log('outsideSuccessSideEffect');
//     }
// }
