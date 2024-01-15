import React, {useState} from 'react';
import {Col} from "antd";
import {Button, Input, InputWrapper} from "../../../shared/ui";

const AddAuthors: React.FC = () => {

    const [bookAuthor, setBookAuthor] = useState("");

    return (
        <>
            <Col xl={{span: 9}}>
                <InputWrapper label="Ваше авторское имя">
                    <Input type="text" placeholder="Николай Гоголь" value={bookAuthor} callback={e => setBookAuthor(e.target.value)}/>
                </InputWrapper>
            </Col>
            <Col xl={{span: 4}} style={{paddingTop: "28px"}}>
                <Button isDark={false} fontSize="12px">Добавить автора</Button>
            </Col>
            <Col xl={{span: 11}}></Col>
            <Col xl={{span: 2}}>
                Александр Никифоров
            </Col>
        </>
    );
};

export default AddAuthors;