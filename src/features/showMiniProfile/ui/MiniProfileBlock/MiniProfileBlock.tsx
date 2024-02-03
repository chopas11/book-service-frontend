import React from 'react';
import s from "./MiniProfileBlock.module.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import image from "../../../../shared/assets/images/AvatarExample.png"
import LogoutIcon from "../../../../shared/assets/IconPack/LogoutIcon/LogoutIcon.tsx";
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {logout, setAuthData} from "../../../../entities/User/model/slice/userReducer.ts";
import {Link} from "react-router-dom";
import {Button} from "../../../../shared/ui";
import ParagraphIcon from "../../../../shared/assets/IconPack/ParagraphIcon/ParagraphIcon.tsx";

interface ProfileFeatureProps {
    visible: boolean,
}

const MiniProfileBlock: React.FC<ProfileFeatureProps> = ({visible}) => {

    const dispatch = useDispatch()

    const {isAuth, balance} = useTypedSelector(state => state.user)

    return (
        <div
            className={`${s.profile} ${visible ? s.visible : s.invisible}`}>
            {
                isAuth ?
                    <div className={s.profile_content}>
                        <div className={s.profile_top}>
                            <div>
                                <img src={image} alt="Avatar"/>
                                <span>Дарья, Автор</span>
                            </div>
                            <div>
                                <p onClick={() => dispatch(logout())}><LogoutIcon/></p>
                            </div>
                        </div>
                        <ul>
                            <li><Link to="/mybooks"><Button type='accent' size='xs' paddingX='10px'>Мои книги</Button></Link></li>
                            <li><Link to="/statistics"><Button type='accent' size='xs' paddingX='10px'>Статистика</Button></Link></li>
                            <li><Link to="/history"><Button type='accent' size='xs' paddingX='10px'>История заказов</Button></Link></li>
                            <li><Link to="/profile"><Button type='accent' size='xs' paddingX='10px'>Настройка профиля</Button></Link></li>
                        </ul>
                        <div className={s.profile_balance}>
                            <p>Баланс <span>{balance} <ParagraphIcon /></span></p>
                        </div>
                    </div>
                    :
                    <div>
                        <p onClick={() => dispatch(setAuthData())}>Войти</p>
                        <p>Регистрация</p>
                    </div>
            }
        </div>
    );
};

export default MiniProfileBlock;