import React from 'react';
import {InputWrapper, Textarea} from "../../../shared/ui";
import {Col} from "antd";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {updateDescriptionAction} from "../../publishBook/model/slice/publicationReducer.ts";

const UpdateDescription: React.FC = () => {

    // Redux
    const dispatch = useDispatch()
    const {description} = useTypedSelector(state => state.publication.publication)

    return (
        <Col xl={{span: 22}} xs={{span: 24}}>
            <InputWrapper label="Напишите описание для книги">
                <Textarea
                    name="annotation"
                    placeholder="Ваш текст"
                    value={description}
                    callback={(e: React.FormEvent<HTMLTextAreaElement>) => dispatch(updateDescriptionAction(e.currentTarget.value))}
                />
            </InputWrapper>
        </Col>
    );
};

export default UpdateDescription;