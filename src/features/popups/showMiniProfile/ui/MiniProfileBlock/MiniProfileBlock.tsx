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
import {modalPath} from "../../../../modals/toggleModal/model/enums/modalPath.ts";
import {toggle} from "../../../../modals/toggleModal/model/slice/toggleModalReducer.ts";


const MiniProfileBlock: React.FC = () => {

    const dispatch = useDispatch()
    const {isAuth, role, balance} = useTypedSelector(state => state.user)

    return (
        <div
            className={s.profile}>
            {
                isAuth ?
                    <div className={s.profile_content}>
                                <div className={s.profile_content_auth}>

                                        <Row>
                                            <Col flex={"auto"}>
                                                <Link to={"/editprofile"}>
                                                    <div className={s.profile_top}>
                                                        <div>
                                                            <img src={image} alt="Avatar"/>
                                                        </div>
                                                        <div className={s.profile_top_description}>
                                                            <p>Дарья</p>
                                                            <span>{role === 'author' ? "Автор" : "Читатель"}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col flex={"20px"}>
                                                <div className={s.profile_logout}>
                                                    <Button type={"borders"} paddingX={"11px"} callback={() => dispatch(logout())} ><LogoutIcon/></Button>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                    {
                                        role === 'author' ?
                                            <ul>
                                                <li><Link to="/mybooks"><Button type='accent' size='xs' paddingX='10px'>Опубликованные
                                                    книги</Button></Link></li>
                                                <li><Link to="/statistics"><Button type='accent' size='xs'
                                                                                   paddingX='10px'>Статистика</Button></Link>
                                                </li>
                                                <li><Link to="/history"><Button type='accent' size='xs' paddingX='10px'>История
                                                    заказов</Button></Link></li>
                                                <li><Link to="/faq"><Button type='accent' size='xs' paddingX='10px'>Частые
                                                    вопросы</Button></Link></li>
                                            </ul> :
                                            <ul>
                                            <li><Link to="/mybooks"><Button type='accent' size='xs' paddingX='10px'>Купленные
                                                    книги</Button></Link></li>
                                                <li><Link to="/collections"><Button type='accent' size='xs'
                                                                                   paddingX='10px'>Подборки</Button></Link>
                                                </li>
                                                <li><Link to="/history"><Button type='accent' size='xs' paddingX='10px'>История
                                                    покупок</Button></Link></li>
                                                <li><Link to="/faq"><Button type='accent' size='xs' paddingX='10px'>Частые вопросы</Button></Link></li>
                                            </ul>
                                    }

                                    <div className={s.profile_balance}>
                                        <p>Баланс: <BalanceCard balance={balance}/></p>
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
                            <li><Button callback={() => dispatch(toggle({path: modalPath.REGISTRATION_VIEWER}))} type='accent' size='xs' paddingX='10px'
                            >Регистрация</Button></li>
                        </ul>
                    </div>
            }
        </div>
    );
};

export default MiniProfileBlock;