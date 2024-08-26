import React, {useState} from 'react';
import {Button} from "../../../shared/ui";
import CartIcon from "../../../shared/assets/IconPack/CartIcon/CartIcon.tsx";
import s from "./ShowCart.module.css"
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";

const ShowCart:React.FC = () => {

    const {cartBooks} = useTypedSelector(state => state.book)

    return (
        <div className={s.cart}>
            <Link to="/cart">
                <Button type='primary' size='lg' paddingX='10px'>
                    <CartIcon/>
                </Button>
                <div className={`${cartBooks.length ? s.isCart : s.notCart}`}>
                    {cartBooks.length}
                </div>
            </Link>

        </div>
    );
};

export default ShowCart;