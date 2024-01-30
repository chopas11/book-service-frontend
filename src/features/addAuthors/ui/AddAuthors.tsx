import React, {useState} from 'react';
import {Col} from "antd";
import {Button, Input, InputWrapper} from "../../../shared/ui";
import {useDispatch} from "react-redux";
import {addAuthor, deleteAuthor} from "../../publication/model/slice/publicationReducer.ts";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";

const AddAuthors: React.FC = () => {

    const dispatch = useDispatch()

    const {authors} = useTypedSelector(state => state.publication)

    const [newAuthor, setNewAuthor] = useState("");

    const addNewAuthor = () => {
        dispatch(addAuthor(newAuthor));
        setNewAuthor("");
    }

    return (
        <>
            <Col xl={{span: 9}}>
                <InputWrapper label="Ваше авторское имя">
                    <Input type="text" placeholder="Николай Гоголь" value={newAuthor} callback={(e: React.FormEvent<HTMLInputElement>) => setNewAuthor(e.currentTarget.value)}/>
                </InputWrapper>
            </Col>
            <Col xl={{span: 4}} style={{paddingTop: "28px"}}>
                <Button isDark={false} fontSize="12px" callback={() => addNewAuthor()}>Добавить автора</Button>
            </Col>
            <Col xl={{span: 11}}></Col>

            {authors.map(author => {
                return (
                    <Button isDark={false} fontSize="12px" border="0"
                            width="100px" height="24px" callback={() => dispatch(deleteAuthor(author))}>{author}</Button>
                )
            })}



        </>
    );
};

export default AddAuthors;