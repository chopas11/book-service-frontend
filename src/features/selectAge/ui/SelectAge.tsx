import React from 'react';
import {Button, InputWrapper} from "../../../shared/ui";
import {Col} from "antd";

const SelectAge: React.FC = () => {
    return (
        <Col xl={{span:9}}>
            <InputWrapper label="Выберите возрастное ограничение">
                <Button isDark={false} padding="0 11px" >0+</Button>
                <Button isDark={false} padding="0 11px">6+</Button>
                <Button isDark={false} padding="0 7px">12+</Button>
                <Button isDark={false} padding="0 7px">16+</Button>
                <Button isDark={false} padding="0 7px">18+</Button>
            </InputWrapper>
        </Col>
    );
};

export default SelectAge;