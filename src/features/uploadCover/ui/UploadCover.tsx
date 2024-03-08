import React from 'react';
import {Button, InputWrapper} from "../../../shared/ui";
import InputFile from "../../../shared/ui/forms/InputFile/InputFile.tsx";
import {Col} from "antd";
import {uploadCoverAction} from "../../publishBook/model/slice/publicationReducer.ts";
import {useDispatch} from "react-redux";
import {toggle} from "../../modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../modals/toggleModal/model/enums/modalPath.ts";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";
import CrossIcon from "../../../shared/assets/IconPack/CrossIcon/CrossIcon.tsx";

const UploadCover: React.FC = () => {

    // Redux
    const dispatch = useDispatch()

    const {coverImage} = useTypedSelector(state => state.publication.publication)

    return (
        <>
            <Col xl={{span: 22}}>
                <InputWrapper label="Загрузите обложку книги в PDF, JPEG, JPG" >
                    <InputFile callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadCoverAction(e.currentTarget.files[0]))} />
                    <Button callback={() => dispatch(toggle({path: modalPath.COVER_VIEWER}))} isDark={false}>Предпросмотр</Button>
                    {/*{cover ? <Button type='accent' size='xs'>{cover.name}</Button> : ""}*/}
                </InputWrapper>
            </Col>
            <Col xl={{span: 2}}></Col>
            <Col xl={{span: 9}}>
                {coverImage ? <Button type='accent' size='xs' paddingX='12px'>{coverImage.name} &nbsp;<CrossIcon /></Button> : ""}
            </Col>
        </>

    );
};

export default UploadCover;