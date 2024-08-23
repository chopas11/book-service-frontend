import React from 'react';

import s from './IconBlock.module.css'

interface IconBlockProps {
    size: string,
    background?: string,
    border?: string,
    color?: string,
    fontSize?: string,
    children: React.ReactNode,
}

const IconBlock:React.FC<IconBlockProps> = (
    {
        size,
        background = "transparent",
        border = "0",
        color = "white",
        fontSize = '16px',
        children
    }) => {
    return (
        <div
            style={{
                height: size,
                width: size,
                background: background,
                color: color,
                fontSize: fontSize,
                border: border,
            }}

            className={s.icon}>
            {children}
        </div>
    );
};

export default IconBlock;