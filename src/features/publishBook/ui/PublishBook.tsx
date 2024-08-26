import React, {useState} from 'react';
import {Button, TextWrapper} from "../../../shared/ui";
import {useDispatch} from "react-redux";
import {toggle} from "../../modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../modals/toggleModal/model/enums/modalPath.ts";
import {createNotificationAction} from "../../popups/showNotifications/model/slice/notificationsReducer.ts";
import {Col, Row} from "antd";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import ServiceCard from "../../../shared/ui/ServicesList/ServiceCard/ServiceCard.tsx";
import {publicationService} from "../model/services/PublicationService.ts";



const PublishBook: React.FC = () => {

    const dispatch = useDispatch()

    const {publication, services, tariff} = useTypedSelector(state => state.publication)

    const takePayment = () => {

        const message = 'Ваш заказ успешно создан. Оплатите выбранные услуги в разделе «Мои книги» в течение часа';
        dispatch(createNotificationAction(message))
        dispatch(publicationService({publication, services, tariff}))
        dispatch(toggle({path: modalPath.ORDER_VIEWER}));

    }

    const price = services.reduce((acc, service) => acc + service.price, 0)

    return (
        <div><br/>
            <h2>Услуги, которые вы выбрали</h2><br/>
            <Row gutter={[12, 12]}>
                {services.length > 0 ? services.map(item => {
                        return (
                            <Col xl={{span: 6}}>
                                <ServiceCard
                                    key={item.id}
                                    service={item}
                                    active={true}
                                />
                            </Col>
                        )
                    }) :
                    "Вы еще не выбрали ничего"}
            </Row>

            <h2>{price > 0 ? "К оплате" : "Перейти к оформлению"}</h2><br/>
            {price > 0 &&
                <TextWrapper color="var(--white-color)" background="var(--dark-color)" fontSize="24px">
                    {price} р
                </TextWrapper>}
            <div className="button_center">
            <Button type='page' size='xl' paddingX='80px' callback={() => takePayment()}>
                Создать книгу</Button>
            </div>
        </div>
    );
};

export default PublishBook;