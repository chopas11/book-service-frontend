// import React from 'react';
import s from "./Button.module.css"

interface ButtonProps {
    isDark: boolean,
    height?: string,
    width?: string,
    fontSize?: string,
    callback: React.EventHandler<any>,
    children: React.ReactNode
}

const Button:React.FC<ButtonProps> = ({isDark, height, width, fontSize, callback, children}) => {
    return (
        <button
            style={{
                height,
                width,
                fontSize,
            }}
            onClick={callback}
            className={`${s.button} ${isDark ? s.buttonDark: s.buttonLight}`}
        >
            {children}
        </button>
    );
};

export default Button;