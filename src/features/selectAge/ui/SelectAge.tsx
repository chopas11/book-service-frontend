import React from 'react';
import {Button, InputWrapper} from "../../../shared/ui";
import {Col} from "antd";

const SelectAge: React.FC = () => {
    return (
        <Col xl={{span:9}}>
            <InputWrapper label="Выберите возрастное ограничение">
                <Button paddingX='13px'>0+</Button>
                <Button>6+</Button>
                <Button>12+</Button>
                <Button>16+</Button>
                <Button>18+</Button>
            </InputWrapper>
        </Col>
    );
};

export default SelectAge;