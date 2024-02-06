import React from 'react';
// import s from "./UploadBookFile.module.css"
import {Button, InputWrapper} from "../../../shared/ui";
import {Col} from "antd";
import InputFile from "../../../shared/ui/forms/InputFile/InputFile.tsx";
import {useDispatch} from "react-redux";
// import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {uploadFile} from "../../publishBook/model/slice/publicationReducer.ts";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import CrossIcon from "../../../shared/assets/IconPack/CrossIcon/CrossIcon.tsx";
const UploadBookFile: React.FC = () => {


    // Redux
    const dispatch = useDispatch()

    const {file} = useTypedSelector(state => state.publication)

    return (
        <>
            <Col xl={{span: 22}}>
                <InputWrapper label="Загрузите файл книги" >
                    <InputFile callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadFile(e.currentTarget.files[0]))} />
                </InputWrapper>
            </Col>
            <Col xl={{span: 2}}></Col>
            <Col xl={{span: 9}}>
                {file ? <Button type='accent' size='xs' paddingX='12px'>{file.name} &nbsp; <CrossIcon /></Button> : ""}
            </Col>
        </>

    );
};

export default UploadBookFile;