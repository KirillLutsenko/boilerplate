// Core
import React, { FC, useEffect } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Redux
import { usePost } from '../../../bus/post';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Items: FC<PropTypes> = () => {
    const { post, loading, fetchPost } = usePost();
    // function* counter() {
    //     let i = 0;

    //     while (true) {
    //         yield i += 1;
    //     }
    // }

    // const counterGen = counter();

    useEffect(() => {
        fetchPost(1);
    }, []);

    return (
        <S.Container>
            {loading && <p>Loading</p>}
            {!loading && (
                <S.Wrapper>
                    <S.Name>{post.title}</S.Name>
                    <S.Name>{post.body}</S.Name>
                </S.Wrapper>
            )}
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Items />
    </ErrorBoundary>
);
