import React, {useState} from 'react';
import {Col, Row} from "antd";
import TariffCard from "../../../shared/ui/TariffCard/TariffCard.tsx";
import {tariffs} from "../../../entities/Tariff/model/mocks/tariifs.tsx";

const ChooseTariff: React.FC = () => {

    const [tariff, setTariff] = useState(-1)

    const chooseTariff = (id: number) => {
        setTariff(id)
    }

    return (
        <div>
            <br/><br/>
            <h2>Выберите тариф</h2><br/>
            <Row gutter={[24, 24]}>
                {
                    tariffs.map(item => {
                        return (
                            <Col xl={{span: 8}}>
                                <TariffCard
                                    key={item.id}
                                    name={item.name}
                                    bookPrice={item.bookPrice}
                                    royalty={item.royalty}
                                    isChosen={tariff === item.id}
                                    callback={() => chooseTariff(item.id)}
                                    color={item.color}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default ChooseTariff;