import React from 'react';
import ArrowIcon from "../../../../../shared/assets/IconPack/ArrowIcon/ArrowIcon.tsx";
import s from "./BookStatusLabel.module.css"

interface BookStatusLabelProps {
    step: 1 | 2 | 3 | 4,
    callback: React.EventHandler<never>,
}

const BookStatusLabel: React.FC<BookStatusLabelProps> = ({step, callback}) => {

    const statusLabel = step === 1 ?
        "Ожидает оплаты" :
        step === 2 ?
            "В модерации" :
            step === 3 ?
                "Обработка" :
                "Опубликована"

    return (
        <div className={s.bookStatusLabel}>
            <p>Статус:</p>
            <p className={s.bookStatusLabel_label} onClick={callback}>{statusLabel} <ArrowIcon/></p>
        </div>
    );
};

export default BookStatusLabel;