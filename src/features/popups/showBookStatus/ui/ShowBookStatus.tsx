import React from 'react';
import s from "./ShowBookStatus.module.css"

interface ShowBookStatusProps {
    visible: boolean,
    step: 1 | 2 | 3 | 4,
}

const ShowBookStatus: React.FC<ShowBookStatusProps> = ({visible, step}) => {
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

export default ShowBookStatus;