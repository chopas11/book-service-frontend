import React from 'react';
import s from "./MiniProfileBlock.module.css"
import image from "../../../../shared/assets/images/AvatarExample.png"
import LogoutIcon from "../../../../shared/assets/IconPack/LogoutIcon/LogoutIcon.tsx";
import {useState} from "react";

interface ProfileFeatureProps {
    visible: boolean,
}

const MiniProfileBlock: React.FC<ProfileFeatureProps> = ({visible}) => {

    const [isAuth] = useState(true)

    return (
        <div
            className={`${s.profile} ${visible ? s.visible : s.invisible}`}>
            {
                isAuth ?
                    <div className={s.profile_content}>
                        <img src={image} alt="Avatar"/>
                        <span>Дарья, Автор</span>
                        <ul>
                            <li>Мои книги</li>
                            <li>Статистика</li>
                            <li>История заказов</li>
                            <li>Настройки профиля</li>
                        </ul>
                        <p>Выйти <LogoutIcon /></p>
                    </div>
                    :
                    <div>
                        <p>Войти</p>
                        <p>Регистрация</p>
                    </div>
            }
        </div>
    );
};

export default MiniProfileBlock;