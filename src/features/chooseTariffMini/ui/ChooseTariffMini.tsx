import React, {useState} from 'react';
import {Button, InputWrapper, Hint} from "../../../shared/ui";
import {Col} from "antd";
import {tariffs} from "../../../entities/Tariff/model/mocks/tariifs.tsx";

const ChooseTariffMini: React.FC = () => {

    const [tariff, setTariff] = useState(1)

    const chooseTariff = (id: number) => {
        setTariff(id)
    }

    return (
        <Col xl={{span:8}}>
            <InputWrapper label="Измените тариф">
                {tariffs.map(item => {
                    return (
                        <Button callback={() => chooseTariff(item.id)}>{item.name}</Button>
                    )
                })}
            </InputWrapper>
            <br/>
            <Hint text={tariffs[tariff].conditions.map(condition => condition)} />
        </Col>
    );
};

export default ChooseTariffMini;