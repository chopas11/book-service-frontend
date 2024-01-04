import React from 'react';
import s from "./Input.module.css"

interface InputProps {
    type?: string,
    placeholder: string,
    value: string,
    callback: React.EventHandler<never>,
}

const Input :React.FC<InputProps> = ({type = "text", placeholder, value, callback}) => {
    return (
        <input
            className={s.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={callback}
        />
    );
};

export default Input;