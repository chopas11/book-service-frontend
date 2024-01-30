import React from 'react';
import {Button, InputWrapper} from "../../../shared/ui";
import InputFile from "../../../shared/ui/forms/InputFile/InputFile.tsx";
import {Col} from "antd";
import {uploadCover} from "../../publication/model/slice/publicationReducer.ts";
import {useDispatch} from "react-redux";
import {toggle} from "../../toggleModal/modal/slice/toggleModalReducer.ts";
import {modalPath} from "../../toggleModal/modal/enums/modalPath.ts";

const UploadCover: React.FC = () => {

    // Redux
    const dispatch = useDispatch()

    return (
        <Col xl={{span: 9}}>
            <InputWrapper label="Загрузите обложку книги в PDF, JPEG, JPG" >
                <InputFile callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadCover(e.currentTarget.files[0]))} />
                <Button callback={() => dispatch(toggle(modalPath.COVER_VIEWER))} isDark={false}>Предпросмотр</Button>
            </InputWrapper>
        </Col>
    );
};

export default UploadCover;