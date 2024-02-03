import React, {useState} from 'react';
import {Button, TextWrapper} from "../../../shared/ui";
import {useDispatch} from "react-redux";
import {publication} from "../model/slice/publicationReducer.ts";
import {toggle} from "../../toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../toggleModal/model/enums/modalPath.ts";
import {createNotificationAction} from "../../showNotifications/model/slice/notificationsReducer.ts";



const PublishBook: React.FC = () => {

    const dispatch = useDispatch()

    const takePayment = () => {

        const message = 'Ваш заказ успешно создан. Оплатите выбранные услуги в разделе «Мои книги» в течение часа';
        dispatch((publication()))
        dispatch(createNotificationAction(message))
        dispatch(toggle(modalPath.ORDER_VIEWER));
    }

    const [price, setPrice] = useState(100);

    return (
        <div><br/>
            {/*<h2>Услуги, которые вы выбрали</h2><br/>*/}
            {/*<Row gutter={[12, 12]}>*/}
            {/*    {bookAddServices.length > 0 ? bookAddServices.map(item => {*/}
            {/*            return (*/}
            {/*                <Col xl={{span: 6}}>*/}
            {/*                    <ServiceCard*/}
            {/*                        key={item.id}*/}
            {/*                        title={item.title}*/}
            {/*                        description={item.description}*/}
            {/*                        price={item.price}*/}
            {/*                        active={true}*/}
            {/*                        isChosen={true}*/}
            {/*                        callback={() => addServices(item)}*/}
            {/*                    />*/}
            {/*                </Col>*/}
            {/*            )*/}
            {/*        }) :*/}
            {/*        "Вы еще не выбрали ничего"}*/}
            {/*</Row>*/}

            <h2>{price > 0 ? "К оплате" : "Перейти к оформлению"}</h2><br/>
            {price > 0 &&
                <TextWrapper color="var(--theme-color)" fontSize="20px">{price}р</TextWrapper>}
            <Button type='borders' size='lg' callback={() => takePayment()}>
                Создать книгу</Button>
        </div>
    );
};

export default PublishBook;