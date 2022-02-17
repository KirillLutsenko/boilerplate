// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all } from 'redux-saga/effects';

// Types
import * as sagaActions from './sagaActions';

// Workers
import * as workers from './workers';

export function* watchPost(): SagaIterator {
    yield all([ yield takeEvery(sagaActions.fetchPostAction.type, workers.fetchPost) ]);
}
