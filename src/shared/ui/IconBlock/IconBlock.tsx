import React from 'react';

import s from './IconBlock.module.css'

interface IconBlockProps {
    children: React.FC[],
}

const IconBlock:React.FC<IconBlockProps> = ({children}) => {
    return (
        <div className={s.icon}>
            {children}
        </div>
    );
};

export default IconBlock;