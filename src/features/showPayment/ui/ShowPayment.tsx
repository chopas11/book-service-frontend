import React from 'react';
import s from "./ShowPayment.module.css"

const ShowPayment: React.FC = () => {
    return (
        <div className={s.payment}>
            <div className={s.payment_balance}></div>
        </div>
    );
};

export default ShowPayment;