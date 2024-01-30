import React from 'react';
import s from "./Textarea.module.css"

interface TextareaProps {
    name: string,
    placeholder: string,
    value: string,
    callback: React.EventHandler<never>,
}

const Textarea: React.FC<TextareaProps> = ({name, placeholder, value, callback}) => {
    return (
        <textarea
            className={s.textarea}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={callback}

        ></textarea>
    );
};

export default Textarea;