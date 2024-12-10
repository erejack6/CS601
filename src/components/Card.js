import React from 'react';

const Card = ({ title, content, footer, style }) => {
    return (
        <div className="card" style={style}>
            <h3 className="card-title">{title}</h3>
            <p className="card-content">{content}</p>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};

export default Card;
