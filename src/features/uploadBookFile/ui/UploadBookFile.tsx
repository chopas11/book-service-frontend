import React from 'react';
// import s from "./UploadBookFile.module.css"
import {InputWrapper} from "../../../shared/ui";
import {Col} from "antd";
import InputFile from "../../../shared/ui/InputFile/InputFile.tsx";
const UploadBookFile: React.FC = () => {
    return (
        <Col xl={{span: 9}}>
            <InputWrapper label="Загрузите файл книги" >
                <InputFile />
            </InputWrapper>
        </Col>
    );
};

export default UploadBookFile;