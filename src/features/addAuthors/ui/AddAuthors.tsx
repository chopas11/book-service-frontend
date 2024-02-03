import React, {useState} from 'react';
import {Col} from "antd";
import {Button, Input, InputWrapper} from "../../../shared/ui";
import {useDispatch} from "react-redux";
import {addAuthor, deleteAuthor} from "../../publishBook/model/slice/publicationReducer.ts";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import CrossIcon from "../../../shared/assets/IconPack/CrossIcon/CrossIcon.tsx";

const AddAuthors: React.FC = () => {

    const dispatch = useDispatch()

    const {authors} = useTypedSelector(state => state.publication)

    const [newAuthor, setNewAuthor] = useState("");

    const addNewAuthor = () => {
        if (newAuthor !== "") {
            dispatch(addAuthor(newAuthor));
            setNewAuthor("");
        }

    }

    return (
        <>
            <Col xl={{span: 9}}>
                <InputWrapper label="Ваше авторское имя">
                    <Input type="text" placeholder="Николай Гоголь" value={newAuthor} callback={(e: React.FormEvent<HTMLInputElement>) => setNewAuthor(e.currentTarget.value)}/>
                </InputWrapper>
            </Col>
            <Col xl={{span: 4}} style={{paddingTop: "28px"}}>
                <Button callback={() => addNewAuthor()}>Добавить автора</Button>
            </Col>
            <Col xl={{span: 2}}></Col>
            <Col xl={{span: 9}}></Col>

            {authors.map(author => {
                return (
                    <Button type='accent' size='xs' callback={() => dispatch(deleteAuthor(author))}>{author} <CrossIcon /></Button>
                )
            })}



        </>
    );
};

export default AddAuthors;