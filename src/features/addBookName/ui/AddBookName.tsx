import React, {useState} from 'react';
import {Input, InputWrapper} from "../../../shared/ui";
import {Col} from "antd";

const AddBookName = () => {

    const [bookName, setBookName] = useState("");

    return (
        <Col xl={{span: 9}}>
            <InputWrapper label="Введите название книги">
                <Input type="text" placeholder="Название" value={bookName} callback={(e: Event) => setBookName(e.target.value)} />
            </InputWrapper>
        </Col>
    );
};

export default AddBookName;