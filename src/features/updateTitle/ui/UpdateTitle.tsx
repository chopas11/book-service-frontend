import React from 'react';
import {Input, InputWrapper} from "../../../shared/ui";
import {Col} from "antd";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {updateTitleAction} from "../../publishBook/model/slice/publicationReducer.ts";



const UpdateTitle: React.FC = () => {

    // Redux
    const dispatch = useDispatch()
    const {title} = useTypedSelector(state => state.publication.publication)

    return (
        <Col xl={{span: 9}} xs={{span: 24}}>
            <InputWrapper label="Введите название книги">
                <Input theme="blocks" type="text" placeholder="Название" value={title} callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(updateTitleAction(e.currentTarget.value))} />
            </InputWrapper>
        </Col>
    );
};

export default UpdateTitle;