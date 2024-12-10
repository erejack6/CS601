import React from 'react';

const Button = ({
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
