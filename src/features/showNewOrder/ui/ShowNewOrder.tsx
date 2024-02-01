import React from 'react';
import {Button, StarCard} from "../../../shared/ui";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggle} from "../../toggleModal/model/slice/toggleModalReducer.ts";
import MyBookCard from "../../../shared/ui/MyBookCard/MyBookCard.tsx";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";

const ShowNewOrder = () => {

    const dispatch = useDispatch()
    const {title, authors, cover} = useTypedSelector(state => state.publication)

    const navigate = useNavigate();
    const goToMyBooks = () => {
        navigate('/mybooks');
        dispatch(toggle());
    }

    return (
        <div>
            <h3>Ваш заказ успешно создан! </h3><br/>
            <MyBookCard background="#555cf0" cover={cover}>
                <h4>{title}</h4>
                <p>
                    {
                        authors.map(author => {
                            return (
                                author
                            )
                        })
                    }
                </p>
            </MyBookCard>
            <StarCard text="Теперь вам надо оплатить выбранные услуги в разделе «Мои книги» в течение часа"
                      textSize="12px" textColor="#121212" /><br/>
            <Button callback={() => goToMyBooks()} isDark={false} padding="0 10px">Перейти в «Мои книги»</Button>
        </div>
    );
};

export default ShowNewOrder;