import React from 'react';
import s from "./ShowPaymentModal.module.css"
import BalanceCard from "../../../../shared/ui/BalanceCard/BalanceCard.tsx";
import {Button, StarCard, TextWrapper} from "../../../../shared/ui";

const ShowPaymentModal: React.FC = () => {
    return (
        <div className={s.payment}>
            <div className={s.payment_balance}>
                <p>Ваш Баланс: <BalanceCard balance={100} /></p>
            </div>
            <div className={s.payment_content}>
                <p>Общая стоимость услуг:
                    <TextWrapper
                    background="var(--accent-color)"
                    fontSize="16px"
                    padding="15px 40px 15px 20px"
                    >
                        <BalanceCard balance={12} color="var(--text-color)"/>
                    </TextWrapper>
                </p>
                <br/>
                <StarCard
                    text="Доход с каждой купленной книги сразу вам на карту, постоянная поддержка связи с автором, запрет на скриншоты текста книги"
                    textSize="12px" textColor="#fff" starColor="var(--accent-color)"/>
                <br/>
                <Button>Оплатить</Button>
            </div>
        </div>
    );
};

export default ShowPaymentModal;