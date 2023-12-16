// import React from 'react';
import s from "./Button.module.css"

interface ButtonProps {
    isDark: boolean,
    height?: string,
    width?: string,
    fontSize?: string,
    children: React.ReactNode
}

const Button:React.FC<ButtonProps> = ({isDark, height, width, fontSize, children}) => {
    return (
        <button
            style={{
                height,
                width,
                fontSize
            }}
            className={`${s.button} ${isDark ? s.buttonDark: s.buttonLight}`}
        >
            {children}
        </button>
    );
};

export default Button;