import React from 'react';
import {Button, InputWrapper} from "../../shared/ui";
import {Col, Row} from "antd";
import {toggle} from "../../features/modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../features/modals/toggleModal/model/enums/modalPath.ts";
import {useDispatch} from "react-redux";
import ShowBookStatus from "../../features/popups/showBookStatus/ui";
import {Link} from "react-router-dom";
import BookNameCard from "../../shared/ui/BookNameCard/BookNameCard.tsx";
import Block from "../../shared/ui/Block/Block.tsx";
import MyBookCard from "../../shared/ui/MyBookCard/MyBookCard.tsx";
import {IOrder} from "../../entities/Order/model/types/OrderSchema.ts";

interface MyBookWidgetProps {
    order: IOrder,
}

const MyBookWidget: React.FC<MyBookWidgetProps> = ({order}) => {


    const dispatch = useDispatch()
    const payment = () => {
        dispatch(toggle({path: modalPath.PAYMENT_VIEWER, props: [order.services.reduce((acc, service) => acc + service.price, 0), order.id] }));
    }

    return (
        <>
            <Block bgColor="var(--lil-color)" color="var(--text-color)" padding="20px" bdRadius="24px" margin="12px 0">
                <MyBookCard cover={order.publication.coverImage}>
                    <Row>
                        <Col lg={{span: 14}}>
                            <div>
                                <BookNameCard title={order.publication.title} authors={order.publication.authors} />
                                <InputWrapper label="О книге">
                                    <p>{order.publication.description}</p>
                                </InputWrapper>
                            </div>
                        </Col>
                        <Col lg={{span: 9, offset: 1}}>
                            <div>
                                <InputWrapper label="Статус:">
                                    <ShowBookStatus step={order.status} />
                                </InputWrapper>
                                <br/><br/>
                                {order.status === 1 ? <Button
                                    callback={() => payment()}>Оплатить</Button> : ""}
                                {order.status === 4 ? <Link to={"/edit/" + order.id}><Button>Редактировать</Button></Link> : ""}
                            </div>
                        </Col>
                    </Row>
                </MyBookCard>
            </Block>
        </>
    );
};

export default MyBookWidget;