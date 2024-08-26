import React, {useState} from 'react';
import {Col} from "antd";
import {Button, Input, InputWrapper} from "../../../shared/ui";
import {useDispatch} from "react-redux";
import {addAuthorAction, deleteAuthorAction} from "../../publishBook/model/slice/publicationReducer.ts";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import CrossIcon from "../../../shared/assets/IconPack/CrossIcon/CrossIcon.tsx";

const AddAuthors: React.FC = () => {

    const dispatch = useDispatch()

    const {authors} = useTypedSelector(state => state.publication.publication)

    const [newAuthor, setNewAuthor] = useState("");

    const addNewAuthor = () => {
        if (newAuthor !== "") {
            dispatch(addAuthorAction(newAuthor));
            setNewAuthor("");
        }

    }

    return (
        <>
            <Col xl={{span: 9}} xs={{span: 24}}>
                <InputWrapper label="Ваше авторское имя">
                    <Input theme="blocks" placeholder="Николай Гоголь" value={newAuthor} callback={(e: React.FormEvent<HTMLInputElement>) => setNewAuthor(e.currentTarget.value)}/>
                </InputWrapper>
            </Col>
            <Col xl={{span: 4}} style={{paddingTop: "30px"}}>
                <Button type="accent" callback={() => addNewAuthor()}>Добавить автора</Button>
            </Col>
            <Col xl={{span: 2}} xs={{span: 0}}></Col>
            <Col xl={{span: 9}} xs={{span: 24}} style={{paddingTop: "12px"}}></Col>




            {authors.map(author => {
                return (
                    <Col> <Button type='accent' size='xs' paddingX='12px' callback={() => dispatch(deleteAuthorAction(author))}>{author}&nbsp;<CrossIcon /></Button> </Col>
                )
            })}



        </>
    );
};

export default AddAuthors;