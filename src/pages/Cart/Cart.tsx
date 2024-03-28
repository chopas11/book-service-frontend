import React from 'react';
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import BooksWidget from "../../widgets/BooksWidget/BooksWidget.tsx";

const Cart:React.FC = () => {

    const {books} = useTypedSelector(state => state.cart)

    return (
        <div>
            <h2 className="header_center">Корзина</h2>
            <BooksWidget books={books} />
        </div>
    );
};

export default Cart;