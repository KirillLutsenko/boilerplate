// Core
import styled from 'styled-components';

// Components
import { ButtonStyle } from '../../elements/ui/Button/styles';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    & ${ ButtonStyle } {
        
    }
`;

export const BackButton = styled.button`
`;

export const Title = styled.span`
    font-size: 1.25rem;
    font-weight: 600;
`;
