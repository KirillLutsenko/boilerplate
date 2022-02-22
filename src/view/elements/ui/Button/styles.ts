// Core
import styled from 'styled-components';

// Variables
import { variables } from '../../../../assets/variables';

export const ButtonStyle = styled.button`
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    background: transparent;
    border: none;
    color: black;
    transition: background-color ${variables.transition};
    
    &:hover {
        background-color: green;
    }

    &:disabled {
        opacity: 0.4;
    }

    &:disabled:hover {
        background: grey;
        &:disabled:hover {
            cursor: not-allowed;
        }
    }
`;
