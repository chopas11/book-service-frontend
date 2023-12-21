// import React from 'react';
import s from "./InputWrapper.module.css"

interface InputWrapperProps {
    label: string,
    children: React.ReactNode[]
}

const InputWrapper :FC<InputWrapperProps> = ({label, children}) => {
    return (
        <div className={s.inputWrapper}>
            <p>{label}</p>
            {children}
        </div>
    );
};

export default InputWrapper;