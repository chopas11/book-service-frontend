// import React from 'react';

import s from "./NumberBlock.module.css"

interface NumberBlockProps {
    number: number,
}

const NumberBlock: FC<NumberBlockProps> = ({number}) => {
    return (
        <div className={s.numberBlock}>
            {number}
        </div>
    );
};

export default NumberBlock;