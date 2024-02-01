import React from 'react';
import InputFile from "../../../shared/ui/forms/InputFile/InputFile.tsx";
import {uploadCover} from "../../publishBook/model/slice/publicationReducer.ts";
import {Button, InputWrapper} from "../../../shared/ui";
import {toggle} from "../../toggleModal/model/slice/toggleModalReducer.ts";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../shared/hooks/useTypedSelector.ts";

import noCover from "../../../shared/assets/images/no-cover.png"

const ShowCover: React.FC = () => {

    // Redux
    const dispatch = useDispatch()
    const {cover} = useTypedSelector(state => state.publication)
    console.log(cover)
    return (
        <div>
            <h3 className="center">Загрузка обложки</h3><br/>
            {cover ?
                <img src={URL.createObjectURL(cover)} style={{width: "100%", borderRadius: "32px"}} alt="Img"/>
                :
                <img src={noCover} style={{width: "100%", borderRadius: "32px"}} alt="Img"/>
            }
            {/*<InputWrapper label="Загрузите обложку книги в PDF, JPEG, JPG" >*/}
            <div className="center">
                <br/>
                <InputFile name="Загрузить новую" callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadCover(e.currentTarget.files[0]))} />
                <br/><br/>
                <Button padding="0 10px" callback={() => dispatch(toggle())} isDark={false}>Назад</Button>
            </div>

            {/*</InputWrapper>*/}
        </div>
    );
};

export default ShowCover;