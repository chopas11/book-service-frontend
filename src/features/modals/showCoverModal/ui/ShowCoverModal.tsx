import React from 'react';
import InputFile from "../../../../shared/ui/forms/InputFile/InputFile.tsx";
import {uploadCoverAction} from "../../../publishBook/model/slice/publicationReducer.ts";
import {Button} from "../../../../shared/ui";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import noCover from "../../../../shared/assets/images/no-cover.png"
import CrossIcon from "../../../../shared/assets/IconPack/CrossIcon/CrossIcon.tsx";
import s from "./ShowCoverModal.module.css"

const ShowCoverModal: React.FC = () => {

    // Redux
    const dispatch = useDispatch()
    const {coverImage} = useTypedSelector(state => state.publication.publication)
    // console.log(coverImage)
    return (
        <div className={s.coverModal}>
            <h2 className="center">Загрузка обложки</h2><br/>
            {coverImage ?
                <img src={URL.createObjectURL(coverImage)} style={{width: "100%", borderRadius: "32px"}} alt="Img"/>
                :
                <img src={noCover} style={{width: "100%", borderRadius: "32px"}} alt="Img"/>
            }
            <div className="center">
                <br/>
                <InputFile color="lil" name="Загрузить новую" callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(uploadCoverAction(e.currentTarget.files[0]))} />
                <br/>
                {coverImage ? <Button type='accent' size='xs' paddingX='12px'>{coverImage.name} &nbsp;<CrossIcon /></Button> : ""}
            </div>
        </div>
    );
};

export default ShowCoverModal;