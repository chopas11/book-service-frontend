import React from 'react';
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import StatisticsWidget from "../../widgets/StatisticsWidget/StatisticsWidget.tsx";


const Statistics: React.FC = () => {

    const {orders} = useTypedSelector(state => state.order)

    return (
        <>
            <h2 className="header_center">Статистика</h2>
            {
                orders.length > 0 ?
                orders.map(order => {
                    return <StatisticsWidget order={order} />
                }) : <h2> У вас еще ничего нет(</h2>
            }
        </>
    );
};

export default Statistics;