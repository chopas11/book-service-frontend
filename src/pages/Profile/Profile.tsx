import React from 'react';
import {Col, Row} from "antd";
import image from "../../shared/assets/images/AvatarExample.png";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../shared/ui";
import LogoutIcon from "../../shared/assets/IconPack/LogoutIcon/LogoutIcon.tsx";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import s from "./Profile.module.css"
import PublicationIcon from "../../shared/assets/IconPack/PublicationIcon/PublicationIcon.tsx";
import {useDispatch} from "react-redux";
import {getAuthCode, logout} from "../../entities/User/model/services/userService.ts";
import {changeRole} from "../../entities/User/model/slice/userReducer.ts";
import {toggle} from "../../features/modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../features/modals/toggleModal/model/enums/modalPath.ts";

const Profile: React.FC = () => {

    const dispatch = useDispatch()
    const {isAuth, role} = useTypedSelector(state => state.user)

    const changeUserRole = (role) => {
        dispatch(changeRole(role));
    }

    return (
        <div className={s.profile}>
            {
                isAuth ?
                    <Row>
                        <Col xs={{span: 21}}>
                            <div className={s.profile_navbar}>
                                <div>
                                    <img src={image} alt="Avatar"/>
                                </div>
                                <div>
                                    <p>Дарья Формина</p>
                                    <span>{role === 'author' ? "Автор" : "Читатель"}</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span: 3}}>
                            <div className={s.profile_edit}>
                                <Link to="/editprofile"><Button type='primary' paddingX="8px"><PublicationIcon /></Button></Link>
                            </div>
                        </Col>
                        <Col xs={{span: 24}}>
                            {
                                role === 'author' ?
                                    <ul className={s.profile_list}>
                                        <li><Link to="/mybooks"><Button type='page' size='md' paddingX='full'>Опубликованные
                                            книги</Button></Link></li>
                                        <li><Link to="/statistics"><Button type='page' size='md'
                                                                           paddingX='full'>Статистика</Button></Link>
                                        </li>
                                        <li><Link to="/history"><Button type='page' size='md' paddingX='full'>История
                                            заказов</Button></Link></li>
                                        <li><Link to="/faq"><Button type='page' size='md' paddingX='full'>Частые вопросы
                                        </Button></Link></li>
                                        <li><Button callback={() => dispatch(logout())} type='borders' size='md' paddingX='full'> <LogoutIcon/>
                                        </Button></li>
                                    </ul> :
                                    <ul className={s.profile_list}>
                                        <li><Link to="/mybooks"><Button type='page' size='md' paddingX='full'>Купленные
                                            книги</Button></Link></li>
                                        <li><Link to="/collections"><Button type='page' size='md' paddingX='full'>Подборки</Button></Link>
                                        </li>
                                        <li><Link to="/history"><Button type='page' size='md' paddingX='full'>История
                                            покупок</Button></Link></li>
                                        <li><Link to="/faq"><Button type='page' size='md' paddingX='full'>Частые вопросы
                                        </Button></Link></li>
                                        <li><Button callback={() => dispatch(logout())} type='borders' size='md' paddingX='full'> <LogoutIcon/>
                                        </Button></li>
                                    </ul>
                            }
                            <div className={s.profile_changeRole}>
                                {
                                    role === 'author' ? <Button callback={() => changeUserRole('reader')} type='lil' size='md' paddingX='full'>Стать читателем</Button>
                                        : <Button callback={() => changeUserRole('author')} type='lil' size='md' paddingX='full'>Стать автором</Button>
                                }


                            </div>
                        </Col>
                    </Row> :
                    <>
                        <h2 className="header_center">Профиль</h2>
                        <ul className={s.profile_list}>
                            <li><Button callback={() => getAuthCode()} type='page' size='md' paddingX='full'>Войти в
                                систему</Button></li>
                            <li><Button callback={() => dispatch(toggle({path: modalPath.REGISTRATION_VIEWER}))} type='lil' size='md' paddingX='full'>Создать новый аккаунт</Button>
                            </li>
                        </ul>
                    </>
            }
        </div>
    );
};

export default Profile;