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

interface ProfileFeatureProps {
    visible: boolean,
}

const MiniProfileBlock: React.FC<ProfileFeatureProps> = ({visible}) => {

    const dispatch = useDispatch()

    const {isAuth} = useTypedSelector(state => state.user)

    return (
        <div
            className={`${s.profile} ${visible ? s.visible : s.invisible}`}>
            {
                isAuth ?
                    <div className={s.profile_content}>
                        <img src={image} alt="Avatar"/>
                        <span>Дарья, Автор</span>
                        <ul>
                            <li><Link to="/mybooks">Мои книги</Link></li>
                            <li>Статистика</li>
                            <li>История заказов</li>
                            <li>Настройки профиля</li>
                        </ul>
                        <p onClick={() => dispatch(logout())}>Выйти <LogoutIcon /></p>
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