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
import {Col, Row} from "antd";


const MiniProfileBlock: React.FC = () => {

    const dispatch = useDispatch()
    const {isAuth, role, balance} = useTypedSelector(state => state.user)

    return (
        <div
            className={s.profile}>
            {
                isAuth ?
                    <div className={s.profile_content}>
                        <Row>
                            <Col xl={{span: 21}}>
                                <div className={s.profile_content_auth}>
                                    <div className={s.profile_top}>
                                        <div>
                                            <img src={image} alt="Avatar"/>
                                        </div>
                                        <div>Дарья</div>
                                    </div>
                                    {
                                        role === 'author' ?
                                            <ul>
                                                <li><Link to="/mybooks"><Button type='accent' size='xs' paddingX='10px'>Мои
                                                    книги</Button></Link></li>
                                                <li><Link to="/statistics"><Button type='accent' size='xs'
                                                                                   paddingX='10px'>Статистика</Button></Link>
                                                </li>
                                                <li><Link to="/history"><Button type='accent' size='xs' paddingX='10px'>История
                                                    заказов</Button></Link></li>
                                                <li><Link to="/profile"><Button type='accent' size='xs' paddingX='10px'>Настройка
                                                    профиля</Button></Link></li>
                                            </ul> :
                                            <ul>
                                                <li><Link to="/mybooks"><Button type='accent' size='xs' paddingX='10px'>Мои
                                                    книги</Button></Link></li>
                                                <li><Link to="/catalog"><Button type='accent' size='xs'
                                                                                   paddingX='10px'>Каталог</Button></Link>
                                                </li>
                                                <li><Link to="/history"><Button type='accent' size='xs' paddingX='10px'>История
                                                    покупок</Button></Link></li>
                                                <li><Link to="/profile"><Button type='accent' size='xs' paddingX='10px'>Настройки</Button></Link></li>
                                            </ul>
                                    }

                                    <div className={s.profile_balance}>
                                        <p>Баланс: <BalanceCard balance={balance}/></p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={{span: 3}}>
                                <div className={s.profile_logout}>
                                    <p onClick={() => dispatch(logout())}><LogoutIcon/></p>
                                </div>
                            </Col>
                        </Row>
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