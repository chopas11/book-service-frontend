import React from 'react';
import {InputWrapper, Textarea} from "../../../shared/ui";
import {Col} from "antd";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {updateDescription} from "../../publication/model/slice/publicationReducer.ts";

const UpdateDescription: React.FC = () => {

    // Redux
    const dispatch = useDispatch()
    const {description} = useTypedSelector(state => state.publication)

    return (
        <Col xl={{span: 22}}>
            <InputWrapper label="Напишите аннтоацию для книги">
                <Textarea
                    name="annotation"
                    placeholder="Ваш текст"
                    value={description}
                    callback={(e: React.FormEvent<HTMLTextAreaElement>) => dispatch(updateDescription(e.currentTarget.value))}
                />
            </InputWrapper>
        </Col>
    );
};

export default UpdateDescription;