import React, {useState} from 'react';
import {Col, Row} from "antd";
import TariffCard from "../../../shared/ui/TariffCard/TariffCard.tsx";

const tariffs = [
    {
        id: 1,
        name: "Тариф 1",
        bookPrice: 400,
        royalty: 0.5,
        color: "green",
        conditions: [
            "Доход с каждой купленной книги сразу вам на карту",
            "Постоянная поддержка связи с автором",
            "Запрет на скриншоты текста книги",
        ]
    },
    {
        id: 2,
        name: "Тариф 2",
        bookPrice: 500,
        royalty: 0.4,
        color: "lil",
        conditions: [
            "Доход с каждой купленной книги сразу вам на карту",
            "Постоянная поддержка связи с автором",
            "Запрет на скриншоты текста книги",
        ]
    },
    {
        id: 3,
        name: "Тариф 3",
        bookPrice: 600,
        royalty: 0.3,
        color: "accent",
        conditions: [
            "Доход с каждой купленной книги сразу вам на карту",
            "Постоянная поддержка связи с автором",
            "Запрет на скриншоты текста книги",
        ]
    },
]

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