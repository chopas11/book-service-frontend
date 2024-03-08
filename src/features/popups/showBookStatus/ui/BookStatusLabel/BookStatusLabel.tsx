import React from 'react';
import ArrowIcon from "../../../../../shared/assets/IconPack/ArrowIcon/ArrowIcon.tsx";
import s from "./BookStatusLabel.module.css"

interface BookStatusLabelProps {
    step: 1 | 2 | 3 | 4,
}

const BookStatusLabel: React.FC<BookStatusLabelProps> = ({step}) => {

    const statusLabel = step === 1 ?
        "Ожидает оплаты" :
        step === 2 ?
            "В модерации" :
            step === 3 ?
                "Обработка" :
                "Опубликована"

    return (
        <div className={s.bookStatusLabel}>{statusLabel} <ArrowIcon/></div>
    );
};

export default BookStatusLabel;