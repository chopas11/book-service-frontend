import React from 'react';
import s from "./MiniProfileBlock.module.css"
import image from "../../../../../shared/assets/images/AvatarExample.png"
import LogoutIcon from "../../../../../shared/assets/IconPack/LogoutIcon/LogoutIcon.tsx";
import {useTypedSelector} from "../../../../../shared/hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "../../../../../shared/ui";
import BalanceCard from "../../../../../shared/ui/BalanceCard/BalanceCard.tsx";
import {getAuthCode, logout} from "../../../../../entities/User/model/services/userService.ts";

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
                            <p>Баланс: <BalanceCard balance={50} /></p>
                        </div>
                    </div>
                    :
                    <div className={s.profile_content}>
                        <ul>
                            <li><Button type='accent' size='xs' paddingX='10px'
                                        callback={() => getAuthCode()}
                            >
                                Войти в систему
                            </Button></li>
                            <li><Button type='accent' size='xs' paddingX='10px'
                            >Регистрация</Button></li>
                        </ul>
                    </div>
            }
        </div>
    );
};

export default MiniProfileBlock;