import React from 'react';
import s from "./Input.module.css"

interface InputProps {
    type?: string,
    placeholder?: string,
    value: string,
    theme: 'blocks' | 'primary'
    height?: number,
    callback?: React.EventHandler<never>,
}

const Input: React.FC<InputProps> = ({type = "text", placeholder = "", value, theme = "dark", height = 42, callback}) => {
    return (
        <input
            style={{
                height,
            }}
            className={`${s.input} ${theme === 'blocks' ? s.blocks : theme === 'primary' ? s.primary : s.page}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={callback}
        />
    );
};

export default Input;