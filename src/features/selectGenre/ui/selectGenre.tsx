import React from 'react';
import {InputWrapper, Select} from "../../../shared/ui";
import {Col} from "antd";

const SelectGenre = () => {
    return (
        <Col xl={{span: 12}}>
            <InputWrapper label="Выберите жанр">
                <Select />
            </InputWrapper>
        </Col>
    );
};

export default SelectGenre;