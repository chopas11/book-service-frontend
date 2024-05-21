import React from 'react';
import s from "./ShowPaymentModal.module.css"
import BalanceCard from "../../../../shared/ui/BalanceCard/BalanceCard.tsx";
import {Button, Hint, TextWrapper} from "../../../../shared/ui";
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {purchaseMoney} from "../../../../entities/User/model/slice/userReducer.ts";
import {hide} from "../../toggleModal/model/slice/toggleModalReducer.ts";
import {changeOrderStatusAction} from "../../../../entities/Order/model/slice/orderReducer.ts";
import {addMyBooksAction, ClearCartAction} from "../../../../entities/Book/model/slice/bookReducer.ts";
import {useNavigate} from "react-router-dom";


const ShowPaymentModal: React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {role, balance} = useTypedSelector(state => state.user)
    const {orders} = useTypedSelector(state => state.order)
    const {props} = useTypedSelector(state => state.modal)

    const takePurchase = () => {
        dispatch(purchaseMoney(props[0]))

        if (role === 'reader') {
            console.log('Деньги списались с акка читателя');
            dispatch(addMyBooksAction())
            dispatch(ClearCartAction())
            dispatch(hide())
            navigate('/mybooks')
        } else {
            console.log('Деньги списались с акка автора');
            dispatch(changeOrderStatusAction(orders.filter(order => order.id === props[1])[0].id ))
            dispatch(hide())
        }

    }

    return (
        <div className={s.payment}>
            <div className={s.payment_balance}>
                <p>Ваш Баланс: <BalanceCard balance={balance} /></p>
            </div>
            <div className={s.payment_content}>
                <p>Общая стоимость услуг:
                    <TextWrapper
                    background="var(--accent-color)"
                    fontSize="16px"
                    padding="15px 40px 15px 20px"
                    >
                        <BalanceCard balance={props[0]} color="var(--text-color)"/>
                    </TextWrapper>
                </p>
                <br/>
                <Hint
                    text="Доход с каждой купленной книги сразу вам на карту, постоянная поддержка связи с автором, запрет на скриншоты текста книги"
                    textSize="12px" textColor="#fff" starColor="var(--accent-color)"/>
                <br/>
                <Button type='lil' paddingX='full' callback={() => takePurchase()}>Оплатить</Button>
            </div>
        </div>
    );
};

export default ShowPaymentModal;