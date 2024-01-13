// import React from 'react';

import s from "./TextWrapper.module.css"

interface TextWrapperProps {
    color: string,
    background: string,
    fontSize: string,
    children: string[]
}

const TextWrapper: React.FC<TextWrapperProps> = ({color, background, fontSize, children}) => {
    return (
        <span
            className={s.textWrapper}
            style={{
                color: color,
                fontSize: fontSize,
                background: background,
            }}
        >
            {children}
        </span>
    );
};

export default TextWrapper;