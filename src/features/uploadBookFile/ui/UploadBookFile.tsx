import React from 'react';
import {Button, InputWrapper} from "../../../shared/ui";
import {Col} from "antd";
import InputFile from "../../../shared/ui/forms/InputFile/InputFile.tsx";
import {useDispatch} from "react-redux";
import {uploadFileAction} from "../../publishBook/model/slice/publicationReducer.ts";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import CrossIcon from "../../../shared/assets/IconPack/CrossIcon/CrossIcon.tsx";
const UploadBookFile: React.FC = () => {


    // Redux
    const dispatch = useDispatch()

    const {publicationFile} = useTypedSelector(state => state.publication.publication)

    return (
        <>
            <Col xl={{span: 6}}>
                <InputWrapper label="Загрузите файл книги" >
                    <InputFile callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadFileAction(e.currentTarget.files[0]))} />
                </InputWrapper>
            </Col>
            <Col xl={{span: 16}}>
                <p>В формате DOCX, FB2, PDF</p>
                <p>Объем файла до 140 мб</p>
            </Col>
            <Col xl={{span: 2}}></Col>
            <Col xl={{span: 9}}>
                {publicationFile ? <Button type='accent' size='xs' paddingX='12px'>{publicationFile.name} &nbsp; <CrossIcon /></Button> : ""}
            </Col>
        </>

    );
};

export default UploadBookFile;