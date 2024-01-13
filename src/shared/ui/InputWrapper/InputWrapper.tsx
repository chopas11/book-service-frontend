// import React from 'react';
import s from "./InputWrapper.module.css"
import React from "react";

interface InputWrapperProps {
    label: string,
    children: React.ReactNode | React.ReactNode[],
}

const InputWrapper :React.FC<InputWrapperProps> = ({label, children}) => {
    return (
        <div className={s.inputWrapper}>
            <p>{label}</p>
            {children}
        </div>
    );
};

export default InputWrapper;