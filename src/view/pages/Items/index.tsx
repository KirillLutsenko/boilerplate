// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

// const items = [
//     {
//         id:   '0',
//         name: 'Item 1',
//     },
//     {
//         id:   '1',
//         name: 'Item 2',
//     },
//     {
//         id:   '2',
//         name: 'Item 3',
//     },
// ];

const Items: FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: Items
            <Link to = '/register'>Registation</Link>
            {/* <div>
                {items.map((item) => <S.NavButton to = { item.id }>{item.name}</S.NavButton>)}
            </div> */}
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Items />
    </ErrorBoundary>
);
