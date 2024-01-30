import React from 'react';
import s from "./Button.module.css"

interface ButtonProps {
    isDark: boolean,
    height?: string,
    width?: string,
    padding?: string,
    top?: string,
    fontSize?: string,
    border?: string,
    callback?: React.EventHandler<never>,
    children: React.ReactNode
}

const Button:React.FC<ButtonProps> = ({isDark, height, width, padding, top, fontSize, border, callback, children}) => {
    return (
        <button
            style={{
                height,
                width,
                fontSize,
                padding,
                top,
                border,
            }}
            onClick={callback}
            className={`${s.button} ${isDark ? s.buttonDark: s.buttonBlack}`}
        >
            {children}
        </button>
    );
};

export default Button;