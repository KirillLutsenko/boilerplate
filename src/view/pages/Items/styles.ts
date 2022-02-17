// Core
import styled  from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100vw;
    height: 100vh;
`;

export const List = styled.ul`
    width: 500px;
    height: auto;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

export const Name = styled.span`
    font-size: 1.5rem;
    margin-bottom: 5px;
`;

export const Image = styled.img`
`;

export const NavButton = styled(NavLink)(() => ({
    display:        'block',
    textDecoration: 'none',
}));
