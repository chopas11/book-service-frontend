import React from 'react';
import {Button, InputWrapper} from "../../../shared/ui";
import InputFile from "../../../shared/ui/InputFile/InputFile.tsx";
import {Col} from "antd";

const UploadCover: React.FC = () => {
    return (
        <Col xl={{span: 9}}>
            <InputWrapper label="Загрузите обложку книги в PDF, JPEG, JPG" >
                <InputFile />
                <Button isDark={false}>Предпросмотр</Button>
            </InputWrapper>
        </Col>
    );
};

export default UploadCover;