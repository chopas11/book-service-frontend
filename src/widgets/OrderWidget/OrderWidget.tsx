import React from 'react';
import {Col, Row} from "antd";
import {InputWrapper, TextWrapper} from "../../shared/ui";
import BookNameCard from "../../shared/ui/BookNameCard/BookNameCard.tsx";
import ShowBookStatus from "../../features/popups/showBookStatus/ui";
import Block from "../../shared/ui/Block/Block.tsx";
import {IOrder} from "../../entities/Order/model/types/OrderSchema.ts";


interface OrderWidgetProps {
    order: IOrder,
}

const OrderWidget:React.FC<OrderWidgetProps> = ({order}) => {
    return (
        <Block bgColor="var(--lil-color)" color="var(--text-color)" padding="20px" bdRadius="24px" margin="12px 0">
            <p>Заказ №1 от 21.01.2024</p><br/>
            <Row gutter={[12, 12]}>
                <Col lg={{span: 10}}>
                    <InputWrapper label="Книга">
                        <BookNameCard bgColor="green" title={order.publication.title} authors={order.publication.authors} />
                    </InputWrapper>
                </Col>
                <Col lg={{span: 14}}>
                    <InputWrapper label="Услуги">
                        <Row gutter={[12, 12]}>
                            {
                                order.services.length > 0 ? order.services.map(service => {
                                    return (
                                        <Col>
                                            <TextWrapper background="var(--green-color)" size='md' weight='bold'>{service.title}</TextWrapper> {service.price} р
                                        </Col>
                                    )
                                }) : "Услуги не выбраны"
                            }
                        </Row>
                    </InputWrapper>
                </Col>
                <Col lg={{span: 10}}>
                    <InputWrapper label="Статус:">
                        <ShowBookStatus step={order.status}/>
                    </InputWrapper>
                </Col>
                <Col lg={{span: 14}}>
                    <InputWrapper label="Итого">
                        <p>{order.services.reduce((acc, service) => acc + service.price, 0)} р</p>
                    </InputWrapper>
                </Col>
            </Row>
        </Block>
    );
};

export default OrderWidget;