// import React from 'react';

import s from "./TextWrapper.module.css"

interface TextWrapperProps {
    color: string,
    background: string,
    fontSize: string,
    border: string,
    children: string[]
}

const TextWrapper: React.FC<TextWrapperProps> = ({color, background, border, fontSize, children}) => {
    return (
        <span
            className={s.textWrapper}
            style={{
                color: color,
                fontSize: fontSize,
                background: background,
                border: border,
            }}
        >
            {children}
        </span>
    );
};

export default TextWrapper;