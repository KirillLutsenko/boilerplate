// Core
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
import * as sagaActions from './saga/sagaActions';

export const usePost = () => {
    const dispatch = useDispatch();

    const { post, loading } = useSelector((state) => state.post); // Add post to ./src/init/redux/index.ts

    // useEffect(() => {
    //     dispatch(sagaActions.fetchPostAction('any payload'));
    // }, []);

    const fetchPost = (id:number) => {
        dispatch(sagaActions.fetchPostAction(id));
    };

    return {
        post,
        loading,
        fetchPost,
    };
};
