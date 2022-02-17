// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Post = {
    userId: number | null,
    id: number | null,
    title: string,
    body: string,
}

export type PostState = {
    loading: boolean,
    post: Post,
}

// Contracts
type BaseContact<T> = CaseReducer<PostState, PayloadAction<T>>


export type SetPostContract = BaseContact<Post>
export type SetLoadingContract = BaseContact<boolean>
