import React from 'react';
import OrderWidget from "../../widgets/OrderWidget/OrderWidget.tsx";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";

const Orders: React.FC = () => {

    const {orders} = useTypedSelector(state => state.order)

    return (
        <>
            <h2 className="header_center">История заказов</h2>
            {
                orders.length > 0 ?
                orders.map(order => {
                    return <OrderWidget order={order} />
                }) : <h2> У вас еще ничего нет(</h2>
            }
        </>
    );
};

export default Orders;