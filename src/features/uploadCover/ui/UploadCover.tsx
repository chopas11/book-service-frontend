import React from 'react';
import {Button, InputWrapper} from "../../../shared/ui";
import InputFile from "../../../shared/ui/forms/InputFile/InputFile.tsx";
import {Col} from "antd";
import {uploadCover} from "../../publishBook/model/slice/publicationReducer.ts";
import {useDispatch} from "react-redux";
import {toggle} from "../../toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../toggleModal/model/enums/modalPath.ts";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import CrossIcon from "../../../shared/assets/IconPack/CrossIcon/CrossIcon.tsx";

const UploadCover: React.FC = () => {

    // Redux
    const dispatch = useDispatch()

    const {cover} = useTypedSelector(state => state.publication)

    return (
        <>
            <Col xl={{span: 22}}>
                <InputWrapper label="Загрузите обложку книги в PDF, JPEG, JPG" >
                    <InputFile callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadCover(e.currentTarget.files[0]))} />
                    <Button callback={() => dispatch(toggle(modalPath.COVER_VIEWER))} isDark={false}>Предпросмотр</Button>
                    {/*{cover ? <Button type='accent' size='xs'>{cover.name}</Button> : ""}*/}
                </InputWrapper>
            </Col>
            <Col xl={{span: 2}}></Col>
            <Col xl={{span: 9}}>
                {cover ? <Button type='accent' size='xs' paddingX='12px'>{cover.name} &nbsp;<CrossIcon /></Button> : ""}
            </Col>
        </>

    );
};

export default UploadCover;