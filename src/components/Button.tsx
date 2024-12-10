/* Typescript component */
import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    type = 'button',
    className = 'button',
}) => {
    return (
        <button
            type={type}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            className={`${className} ${disabled ? 'button-disabled' : ''}`}
        >
            {label}
        </button>
    );
};

export default Button;
