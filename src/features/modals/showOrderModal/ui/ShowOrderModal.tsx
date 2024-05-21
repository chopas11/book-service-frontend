import React from 'react';
import {Button, Hint} from "../../../../shared/ui";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {hide} from "../../toggleModal/model/slice/toggleModalReducer.ts";
import MyBookCard from "../../../../shared/ui/MyBookCard/MyBookCard.tsx";
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import s from "./ShowOrderModal.module.css"
import BookNameCard from "../../../../shared/ui/BookNameCard/BookNameCard.tsx";
import {publication} from "../../../publishBook/model/slice/publicationReducer.ts";

const ShowOrderModal:React.FC = () => {

    const dispatch = useDispatch()
    const {title, authors, coverImage} = useTypedSelector(state => state.publication.publication)

    const navigate = useNavigate();
    const goToMyBooks = () => {
        navigate('/mybooks');
        dispatch(publication())
        dispatch(hide());
    }

    return (
        <div className={s.newOrder}>
            <h2 className='center'>Ваш заказ успешно создан! </h2><br/>
            <MyBookCard background="#555cf0" cover={coverImage}>
                <BookNameCard title={title} authors={authors} />
            </MyBookCard>
            <Hint text="Теперь вам надо оплатить выбранные услуги в разделе «Мои книги» в течение часа"
                  textSize="12px" textColor="var(--white-color)" /><br/>
            <Button type='lil' callback={() => goToMyBooks()} isDark={false} paddingX="full">Перейти в «Мои книги»</Button>
        </div>
    );
};

export default ShowOrderModal;