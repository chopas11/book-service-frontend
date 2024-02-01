import React from 'react';
// import s from "./UploadBookFile.module.css"
import {InputWrapper} from "../../../shared/ui";
import {Col} from "antd";
import InputFile from "../../../shared/ui/forms/InputFile/InputFile.tsx";
import {useDispatch} from "react-redux";
// import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import {uploadFile} from "../../publishBook/model/slice/publicationReducer.ts";
const UploadBookFile: React.FC = () => {


    // Redux
    const dispatch = useDispatch()

    return (
        <Col xl={{span: 9}}>
            <InputWrapper label="Загрузите файл книги" >
                <InputFile callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadFile(e.currentTarget.files[0]))} />
            </InputWrapper>
        </Col>
    );
};

export default UploadBookFile;