import React from 'react';
import InputFile from "../../../shared/ui/forms/InputFile/InputFile.tsx";
import {uploadCover} from "../../publication/model/slice/publicationReducer.ts";
import {Button, InputWrapper} from "../../../shared/ui";
import {toggle} from "../../toggleModal/modal/slice/toggleModalReducer.ts";
import {useDispatch} from "react-redux";

const ShowCover: React.FC = () => {

    // Redux
    const dispatch = useDispatch()

    return (
        <div>
            <img src="" alt="Img"/>
            <InputWrapper label="Загрузите обложку книги в PDF, JPEG, JPG" >
                <InputFile callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadCover(e.currentTarget.files[0]))} />
                <Button callback={() => dispatch(toggle())} isDark={false}>Назад</Button>
            </InputWrapper>
        </div>
    );
};

export default ShowCover;