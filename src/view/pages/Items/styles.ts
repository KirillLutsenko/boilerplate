// Core
import styled  from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const NavButton = styled(NavLink)(() => ({
    display:        'block',
    textDecoration: 'none',
}));
