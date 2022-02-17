// Types
import * as types from '../../types';
type FetchContact = (id: number) => Promise<types.Post>

// Tools
// import { API_URL } from '../../../../init/constants';
// const ROUTE = '';

export const fetchPost: FetchContact = async (id) => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const response = await fetch(URL, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error();
    }

    return response.json();
};
