// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchPost } from '../../bus/post/saga';

export function* rootSaga() {
    yield all([ watchPost() ]);
}
