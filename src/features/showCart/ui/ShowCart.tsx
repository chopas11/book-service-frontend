import React, {useState} from 'react';
import {Button} from "../../../shared/ui";
import CartIcon from "../../../shared/assets/IconPack/CartIcon/CartIcon.tsx";
import s from "./ShowCart.module.css"
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";

const ShowCart:React.FC = () => {

    const {books} = useTypedSelector(state => state.cart)

    return (
        <div className={s.cart}>
            <Link to="/cart">
                <Button type='borders' size='lg' paddingX='10px'>
                    <CartIcon/>
                </Button>
                <div className={`${books.length ? s.isCart : s.notCart}`}>
                    {books.length}
                </div>
            </Link>

        </div>
    );
};

export default ShowCart;