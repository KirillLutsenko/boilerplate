// Core
import React, { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container, Nav } from './styles';

const Main: FC = () => {
    return (
        <Container>
            <Nav>
                <Link to = 'register'>Registation</Link>
                {/* <Link to = '/items'>Items</Link> */}
            </Nav>
            <Outlet />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
