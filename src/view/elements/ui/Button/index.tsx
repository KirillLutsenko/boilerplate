// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Styles
import * as S from './styles';

export type ButtonType = 'button' | 'submit';

export interface ButtonProps {
    to?: string;
    onClick?: () => void;
    disabled?: boolean | null;
    title?: string;
    children?: string;
    type?: ButtonType;
}

export const Button: FC<ButtonProps> = ({
    children,
    to,
    disabled,
    title,
    onClick,
    type = 'button',
}) => {
    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    if (to && !disabled) {
        return (
            <Link
                to = { to }
                onClick = { handleClick }>
                <S.ButtonStyle
                    disabled = { disabled !== null && disabled }
                    title = { title }
                    type = { type }
                    onClick = { handleClick }>
                    {children}
                </S.ButtonStyle>
            </Link>
        );
    }

    return (
        <S.ButtonStyle
            disabled = { disabled !== null && disabled }
            title = { title }
            type = { type }
            onClick = { handleClick }>
            {children}
        </S.ButtonStyle>
    );
};
