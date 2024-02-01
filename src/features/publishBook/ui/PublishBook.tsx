import React, {useState} from 'react';
import {Button, TextWrapper} from "../../../shared/ui";
import {useDispatch} from "react-redux";
import {publication} from "../model/slice/publicationReducer.ts";
import {toggle} from "../../toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../toggleModal/model/enums/modalPath.ts";



const PublishBook: React.FC = () => {

    const dispatch = useDispatch()

    const takePayment = () => {
        dispatch((publication()))
        dispatch(toggle(modalPath.ORDER_VIEWER));
    }

    const [price, setPrice] = useState(9000);

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
            {price > 0 && <TextWrapper background="var(--background-color)" border="1px solid var(--theme-color)"
                                       color="var(--theme-color)" fontSize="20px">{price}р</TextWrapper>}
            <Button padding="0 10px" callback={() => takePayment()} isDark={true} fontSize="12px">
                Создать книгу</Button>
        </div>
    );
};

export default PublishBook;