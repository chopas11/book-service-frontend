import React from 'react';
import s from "./MiniProfileBlock.module.css"
import image from "../../../../../shared/assets/images/AvatarExample.png"
import {useTypedSelector} from "../../../../../shared/hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "../../../../../shared/ui";
import BalanceCard from "../../../../../shared/ui/BalanceCard/BalanceCard.tsx";
import {getAuthCode, logout} from "../../../../../entities/User/model/services/userService.ts";
import {Col, Row} from "antd";
import {modalPath} from "../../../../modals/toggleModal/model/enums/modalPath.ts";
import {toggle} from "../../../../modals/toggleModal/model/slice/toggleModalReducer.ts";
import {changeRole} from "../../../../../entities/User/model/slice/userReducer.ts";
import {navigate} from "@storybook/addon-links";
import {addOrderAction} from "../../../../../entities/Global/model/slice/GlobalReducer.ts";
import { useTranslation } from 'react-i18next';


const MiniProfileBlock: React.FC = () => {

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const {isAuth, role, balance} = useTypedSelector(state => state.user)
    const {theme} = useTypedSelector(state => state.global)

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

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
                                            <p>{t('miniProfileBlock_welcome')}, Alexander</p>
                                            <span>{role === 'author' ? t('author') : t('reader')}</span>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    {role === 'author' ?
                        <ul>
                            <li><Link to="/mybooks"><Button type='primary' size='md' paddingX='full'>{t('publishedBooks')}</Button></Link></li>
                            <li><Link to="/publish"><Button type='primary' size='md' paddingX='full'>{t('publication')}</Button></Link></li>
                            <li><Link to="/statistics"><Button type='primary' size='md' paddingX='full'>{t('statistics')}</Button></Link></li>
                            <li><Link to="/history"><Button type='primary' size='md' paddingX='full'>{t('orderHistory')}</Button></Link></li>
                            <li><Link to="/withdraw"><Button type='primary' size='md' paddingX='full'>{t('withdraw')}</Button></Link></li>
                            <li><Link to="/editprofile"><Button type='primary' size='md' paddingX='full'>{t('profileSettings')}</Button></Link></li>
                            <li><Link to="/faq"><Button type='primary' size='md' paddingX='full'>{t('faq')}</Button></Link>
                            </li>
                        </ul> :
                        <ul>
                            <li><Link to="/mybooks"><Button type='primary' size='md' paddingX='full'>{t('boughtBooks')}</Button></Link></li>
                            <li><Link to="/catalog"><Button type='primary' size='md'
                                                            paddingX='full'>{t('catalog')}</Button></Link></li>
                            <li><Link to="/collections"><Button type='primary' size='md' paddingX='full'>{t('myCollections')}</Button></Link></li>
                            <li><Link to="/history"><Button type='primary' size='md' paddingX='full'>{t('purchaseHistory')}</Button></Link></li>
                            <li><Link to="/editprofile"><Button type='primary' size='md' paddingX='full'>{t('profileSettings')}</Button></Link></li>
                            <li><Link to="/faq"><Button type='primary' size='md' paddingX='full'>{t('faq')}</Button></Link>
                            </li>
                        </ul>
                    }
                    <div className={s.profile_balance}>
                        <div><p>{t('balance')}</p></div>
                        <div><BalanceCard balance={balance}/></div>
                    </div>
                    <div className={s.profile_balance}>
                        <div><p>{t('darkMode')}</p></div>
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
                        <div><p>{t('systemTheme')}</p></div>
                        <div>
                            <div className={s.checkbox_wrapper}>
                                <input type="checkbox" id="toggle2" className={s.checkbox_input} />
                                <label htmlFor="toggle2" className={s.checkbox_label}></label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Button callback={() => changeLanguage('ru')}>Русский</Button>
                    <Button callback={() => changeLanguage('en')}>English</Button>
                    <Button callback={() => changeLanguage('rs')}>Srpski</Button>
                    <br/>

                    <br/>
                    {role === "author" ?
                        <Button type={'accent'} paddingX={'full'} callback={() => changeUserRole('reader')}>{t('changeToReader')}</Button>
                        :
                        <Button type={'accent'} paddingX={'full'} callback={() => changeUserRole('author')}>{t('changeToAuthor')}</Button>
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