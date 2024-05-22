import React from 'react';
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import {Button} from "../../shared/ui";
import {useDispatch} from "react-redux";
import {toggle} from "../../features/modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../features/modals/toggleModal/model/enums/modalPath.ts";
import BookReaderList from "../../shared/ui/BookReaderList/BookReaderList.tsx";

const Cart:React.FC = () => {

    const {cartBooks} = useTypedSelector(state => state.book)

    const dispatch = useDispatch()
    const payment = () => {
        dispatch(toggle({path: modalPath.PAYMENT_VIEWER, props: [cartBooks.reduce((acc, book) => acc + book.price, 0)] }));
    }

    return (
        <div>
            <h2 className="header_center">Корзина</h2>
            <BookReaderList books={cartBooks}/>
            <div className="button_center desktop_visibility">
                <Button type='page' size='xl' paddingX='80px' callback={() => payment()}
                >Оформить заказ</Button>
            </div>
            <div className="button_center mobile_visibility">
                <Button type='page' size='lg' paddingX='full' callback={() => payment()}
                >Оформить заказ</Button>
            </div>
        </div>
    );
};

export default Cart;