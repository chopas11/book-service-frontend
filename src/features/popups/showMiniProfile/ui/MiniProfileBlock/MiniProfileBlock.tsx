import React from 'react';
import s from "./MiniProfileBlock.module.css"
import image from "../../../../../shared/assets/images/AvatarExample.png"
import {useTypedSelector} from "../../../../../shared/hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "../../../../../shared/ui";
import BalanceCard from "../../../../../shared/ui/BalanceCard/BalanceCard.tsx";
import {getAuthCode, logout} from "../../../../../entities/User/model/services/userService.ts";
import {Checkbox, Col, Row} from "antd";
import {modalPath} from "../../../../modals/toggleModal/model/enums/modalPath.ts";
import {toggle} from "../../../../modals/toggleModal/model/slice/toggleModalReducer.ts";
import {changeRole} from "../../../../../entities/User/model/slice/userReducer.ts";
import {navigate} from "@storybook/addon-links";
import {addOrderAction} from "../../../../../entities/Global/model/slice/GlobalReducer.ts";


const MiniProfileBlock: React.FC = () => {

    const dispatch = useDispatch()
    const {isAuth, role, balance} = useTypedSelector(state => state.user)
    const {theme} = useTypedSelector(state => state.global)

    const changeUserRole = (role) => {
        dispatch(changeRole(role));
        navigate('/');
    }

    const changeTheme = () => {
        dispatch(addOrderAction());
    }

    return (
        <div
            className={s.profile}>
            {isAuth ?
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
                                            <p>С возвращением, Дарья</p>
                                            <span>{role === 'author' ? "Автор" : "Читатель"}</span>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    {role === 'author' ?
                        <ul>
                            <li><Link to="/mybooks"><Button type='primary' size='md' paddingX='full'>Опубликованные
                                книги</Button></Link></li>
                            <li><Link to="/publish"><Button type='primary' size='md' paddingX='full'>Публикация
                                книги</Button></Link></li>
                            <li><Link to="/statistics"><Button type='primary' size='md' paddingX='full'>Статистика по
                                книгам</Button></Link></li>
                            <li><Link to="/publish"><Button type='primary' size='md' paddingX='full'>История
                                заказов</Button></Link></li>
                            <li><Link to="/statistics"><Button type='primary' size='md' paddingX='full'>Вывод
                                средств</Button></Link></li>
                            <li><Link to="/editprofile"><Button type='primary' size='md' paddingX='full'>Настройка
                                профиля</Button></Link></li>
                            <li><Link to="/faq"><Button type='primary' size='md' paddingX='full'>Частые вопросы</Button></Link>
                            </li>
                        </ul> :
                        <ul>
                            <li><Link to="/mybooks"><Button type='primary' size='md' paddingX='full'>Купленные
                                книги</Button></Link></li>
                            <li><Link to="/catalog"><Button type='primary' size='md'
                                                            paddingX='full'>Каталог</Button></Link></li>
                            <li><Link to="/collections"><Button type='primary' size='md' paddingX='full'>Мои
                                подборки</Button></Link></li>
                            <li><Link to="/history"><Button type='primary' size='md' paddingX='full'>История
                                покупок</Button></Link></li>
                            <li><Link to="/editprofile"><Button type='primary' size='md' paddingX='full'>Настройка
                                профиля</Button></Link></li>
                            <li><Link to="/faq"><Button type='primary' size='md' paddingX='full'>Частые вопросы</Button></Link>
                            </li>
                        </ul>
                    }
                    <div className={s.profile_balance}>
                        <div><p>Баланс</p></div>
                        <div><BalanceCard balance={balance}/></div>
                    </div>
                    <div className={s.profile_balance}>
                        <div><p>Режим затемнения</p></div>
                        <div>
                            {
                                theme === 'light' ?
                                    <div className={s.checkbox_wrapper}>
                                        <input type="checkbox" id="toggle" className={s.checkbox_input}
                                               onChange={() => changeTheme()}/>
                                        <label htmlFor="toggle" className={s.checkbox_label}></label>
                                    </div>
                                    :
                                    <div className={s.checkbox_wrapper}>
                                        <input type="checkbox" id="toggle" className={s.checkbox_input}
                                               onChange={() => changeTheme()} checked/>
                                        <label htmlFor="toggle" className={s.checkbox_label}></label>
                                    </div>
                            }

                        </div>
                    </div>
                    <div className={s.profile_balance}>
                        <div><p>Цветовая схема как в системе:</p></div>
                        <div>
                            <div className={s.checkbox_wrapper}>
                                <input type="checkbox" id="toggle2" className={s.checkbox_input} />
                                <label htmlFor="toggle2" className={s.checkbox_label}></label>
                            </div>
                        </div>
                    </div>


                    {/*<Checkbox onChange={() => changeTheme()} />*/}
                    {/*<Button callback={() => changeTheme()}>Изменить тему</Button>*/}
                    <br/>
                    {role === "author" ?
                        <Button type={'accent'} paddingX={'full'} callback={() => changeUserRole('reader')}>Сменить на
                            читателя</Button>
                        :
                        <Button type={'accent'} paddingX={'full'} callback={() => changeUserRole('author')}>Сменить на
                            автора</Button>
                    }
                </div>
                :
                <div className={s.profile_content}>
                    <ul>
                        <li><Button type='accent' size='md' paddingX='full' callback={() => getAuthCode()}>Войти в
                            систему</Button></li>
                        <li><Button callback={() => dispatch(toggle({path: modalPath.REGISTRATION_VIEWER}))}
                                    type='primary' size='md' paddingX='full'>Регистрация</Button></li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default MiniProfileBlock;