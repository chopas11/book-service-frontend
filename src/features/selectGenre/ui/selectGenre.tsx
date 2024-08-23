import React from 'react';
import {InputWrapper, Dropdown} from "../../../shared/ui";
import {Col} from "antd";

const SelectGenre = () => {
    return (
        <Col xl={{span: 12}}>
            <InputWrapper label="Выберите жанр">
                <Dropdown />
            </InputWrapper>
        </Col>
    );
};

export default SelectGenre;