// import React from 'react';

import s from "./TextWrapper.module.css"
import React from "react";

interface TextWrapperProps {
    color?: string,
    background?: string,
    //
    theme?: 'default' | 'green' | 'lil' | 'accent',

    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',

    padding?: string | 0,

    weight?: 'normal' | 'bold',

    //
    children: React.ReactNode[] | React.ReactNode
}

const TextWrapper: React.FC<TextWrapperProps> = (
    {
        color = "var(--text-color)",
        background = "var(--accent-color)",
        size = 'sm',
        // border = 0,
        padding = "10px 12px",
        weight = "normal",
        // fontSize = "16px",
        children
    }) => {

    // let height = "0";
    let fontSize = "0";
    let textTransform = "";
    let fontWeight = "";
    switch (size) {
        case 'xs':
            // height = "26px";
            fontSize = "12px";
            break;
        case 'sm':
            // height = "30px";
            fontSize = "16px";
            break;
        case 'md':
            // height = "42px";
            fontSize = "20px";
            break;
        case 'lg':
            // height = "50px";
            fontSize = "24px";
            break;
        case 'xl':
            // height = "64px";
            fontSize = "32px";
            break;
    }
    switch (weight) {
        case 'normal':
            textTransform = "capitalize";
            fontWeight = "normal";
            break;
        case 'bold':
            textTransform = "uppercase";
            fontWeight = "bold";
            break;
    }

    return (
        <div
            className={s.textWrapper}
            style={{
                color: color,
                fontSize: fontSize,
                background: background,
                fontWeight: fontWeight,
                textTransform: textTransform,
                // border: border,
                padding: padding,
            }}
        >
            {children}
        </div>
    );
};

export default TextWrapper;