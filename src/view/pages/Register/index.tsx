// Core
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { Button } from '../../elements/ui/Button';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Register: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Title>
                Страница для регистрации
            </S.Title>
            <Button
                to = '/'>
                Вернуться
            </Button>
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);
