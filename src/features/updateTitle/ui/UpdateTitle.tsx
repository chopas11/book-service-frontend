import React from 'react';
import {Input, InputWrapper} from "../../../shared/ui";
import {Col} from "antd";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {updateTitle} from "../../publication/model/slice/publicationReducer.ts";



const UpdateTitle: React.FC = () => {

    // Redux
    const dispatch = useDispatch()
    const {title} = useTypedSelector(state => state.publication)

    return (
        <Col xl={{span: 9}}>
            <InputWrapper label="Введите название книги">
                <Input type="text" placeholder="Название" value={title} callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(updateTitle(e.currentTarget.value))} />
            </InputWrapper>
        </Col>
    );
};

export default UpdateTitle;