import React, {useEffect} from 'react';
import MyBookWidget from "../../widgets/MyBookWidget/MyBookWidget.tsx";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";



const MyBooks: React.FC = () => {

    useEffect(() => {
        document.title = 'Мои книги';
    }, []);

    const {orders} = useTypedSelector(state => state.order)

    return (
        <>
            <h2 className="header_center">Мои книги</h2>
            {
                orders.length > 0 ?
                orders.map(order => {
                    return <MyBookWidget order={order} />
                }) : <h2> У вас еще ничего нет(</h2>
            }

        </>
    );
};

export default MyBooks;