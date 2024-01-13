import React from 'react';

import s from './IconBlock.module.css'

interface IconBlockProps {
    size: string,
    background?: string,
    border?: string,
    color?: string,
    children: React.ReactNode,
}

const IconBlock:React.FC<IconBlockProps> = ({size, background = "transparent", border = "0", color = "white", children}) => {
    return (
        <div
            style={{
                height: size,
                width: size,
                background: background,
                color: color,
                border: border,
            }}

            className={s.icon}>
            {children}
        </div>
    );
};

export default IconBlock;