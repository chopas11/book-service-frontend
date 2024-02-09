import React from 'react';
import s from "./BookStatusBlock.module.css"

interface BookStatusBlockProps {
    visible: boolean,
    step: 1 | 2 | 3 | 4,
}

const BookStatusBlock: React.FC<BookStatusBlockProps> = ({visible, step}) => {
    return (
        <div className={`${s.status} ${visible ? s.visible : s.invisible}`}>
            <ul>
                <li className={`${step === 1 ? s.step1 : ""}`}>Ожидает оплаты</li>
                <li className={`${step === 2 ? s.step2 : ""}`}>В модерации</li>
                <li className={`${step === 3 ? s.step2 : ""}`}>Обработка</li>
                <li className={`${step === 4 ? s.step4 : ""}`}>Опубликована</li>
            </ul>
        </div>
    );
};

export default BookStatusBlock;