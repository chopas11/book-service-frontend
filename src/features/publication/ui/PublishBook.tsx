import React, {useState} from 'react';
import {Button, TextWrapper} from "../../../shared/ui";
import {useDispatch} from "react-redux";
import {publication} from "../model/slice/publicationReducer.ts";
import {toggle} from "../../toggleModal/modal/slice/toggleModalReducer.ts";
import {modalPath} from "../../toggleModal/modal/enums/modalPath.ts";



const PublishBook: React.FC = () => {

    const dispatch = useDispatch()

    const takePayment = () => {
        dispatch((publication()))
        dispatch(toggle(modalPath.AUTHORIZATION_VIEWER));
    }

    const [price, setPrice] = useState(9000);

    return (
        <div>
            <h2>Услуги, которые вы выбрали</h2><br/>
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

            <h2>{price > 0 ? "К оплате" : "Перейти к оформлению"}</h2>
            {price > 0 && <TextWrapper background="var(--background-color)" border="1px solid var(--theme-color)"
                                       color="var(--theme-color)" fontSize="20px">{price}р</TextWrapper>}
            <Button callback={() => takePayment()} isDark={true} fontSize="12px">
                {price > 0 ? "Перейти к оплате" : "Продолжить"}</Button>
        </div>
    );
};

export default PublishBook;