import React, {useState} from 'react';
import {InputWrapper, Textarea} from "../../../shared/ui";
import {Col} from "antd";

const AddAnnotation = () => {

    const [bookAnnotation, setBookAnnotation] = useState("");

    return (
        <Col xl={{span: 22}}>
            <InputWrapper label="Напишите аннтоацию для книги">
                <Textarea
                    name="annotation"
                    placeholder="Ваш текст"
                    value={bookAnnotation}
                    callback={e => setBookAnnotation(e.target.value)}
                />
            </InputWrapper>
        </Col>
    );
};

export default AddAnnotation;