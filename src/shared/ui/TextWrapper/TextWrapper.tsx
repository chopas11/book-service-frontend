// import React from 'react';

import s from "./TextWrapper.module.css"
import React from "react";

interface TextWrapperProps {
    color?: string,
    background?: string,
    fontSize?: string,
    border?: string | 0,
    padding?: string | 0,
    children: React.ReactNode[] | React.ReactNode
}

const TextWrapper: React.FC<TextWrapperProps> = (
    {
        color = "var(--text-color)",
        background = "var(--accent-color)",
        border = 0,
        padding = "10px 12px",
        fontSize = "16px",
        children
    }) => {
    return (
        <span
            className={s.textWrapper}
            style={{
                color: color,
                fontSize: fontSize,
                background: background,
                border: border,
                padding: padding,
            }}
        >
            {children}
        </span>
    );
};

export default TextWrapper;