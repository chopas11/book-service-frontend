import React from 'react';

import s from "./NumberBlock.module.css"

interface NumberBlockProps {
    number: number,
    isInverted: boolean,
}

const NumberBlock: React.FC<NumberBlockProps> = ({number, isInverted}) => {
    return (
        <div className={`${s.numberBlock} ${isInverted ? s.inverted : ""}`}>
            {number}
        </div>
    );
};

export default NumberBlock;