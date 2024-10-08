import React from 'react';
import s from "./Input.module.css"

interface InputProps {
    type?: string,
    placeholder?: string,
    value: string,
    theme: 'dark' | 'light' | 'page',
    callback?: React.EventHandler<never>,
}

const Input: React.FC<InputProps> = ({type = "text", placeholder = "", value, theme = "dark", callback}) => {
    return (
        <input
            className={`${s.input} ${theme === 'dark' ? s.dark : theme === 'light' ? s.light : s.page}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={callback}
        />
    );
};

export default Input;