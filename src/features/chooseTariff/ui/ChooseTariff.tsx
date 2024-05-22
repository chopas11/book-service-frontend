import React, {useState} from 'react';
import {Carousel, Col, Row} from "antd";
import TariffCard from "../../../shared/ui/TariffCard/TariffCard.tsx";
import {tariffs} from "../../../entities/Tariff/model/mocks/tariifs.tsx";
import {useDispatch} from "react-redux";
import {chooseTariffAction} from "../../publishBook/model/slice/publicationReducer.ts";

const ChooseTariff: React.FC = () => {

    const dispatch = useDispatch()
    const [tariff, setTariff] = useState(-1)
    const chooseTariff = (id: number) => {
        setTariff(id)
        dispatch(chooseTariffAction(tariffs[id]))
        // dispatch(chooseTariffAction([...tariffs].filter((item) => item.id === id)[0]))
    }

    return (
        <div>
            <br/><br/>
            <h2>Выберите тариф</h2><br/>
            <Row gutter={[24, 24]}>
            {/*    <Carousel arrows speed={200}>*/}
                {
                    tariffs.map(item => {
                        return (
                            <Col xl={{span: 8}} md={{span: 12}}>
                                <TariffCard
                                    key={item.id}
                                    name={item.name}
                                    bookPrice={item.publicationPrice}
                                    royalty={item.royalty}
                                    isChosen={tariff === item.id}
                                    callback={() => chooseTariff(item.id)}
                                    color={item.color}
                                />
                            </Col>
                        )
                    })
                }
                {/*</Carousel>*/}
            </Row>
        </div>
    );
};

export default ChooseTariff;