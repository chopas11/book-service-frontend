import React, {useState} from 'react';
import {Button, Input, InputWrapper} from "../../../../shared/ui";
import {useDispatch} from "react-redux";
import {updateEmail, updatePassword} from "../model/slice/authReducer.ts";
import s from "./ShowRegistrationModal.module.css"
import {Checkbox} from "antd";
import {Link} from "react-router-dom";
// @ts-ignore
import {google} from "../../../../shared/assets/images/google.png";
import {ya} from "../../../../shared/assets/images/ya.png"
import {vk} from "../../../../shared/assets/images/vk.png"

const ShowRegistrationModal: React.FC = () => {

    const dispatch = useDispatch()
    const[registrationPage, setRegistrationPage] = useState(1);

    return (
        <div className={s.regModal}>
            {
                registrationPage === 1 ?
                    <>
                        <h2>Регистрация</h2>
                        <br/><br/>
                        <ul>
                            <li><Button type='page' paddingX="full"> Войти с помощью Google</Button></li>
                            <li><Button type='page' paddingX="full">Войти с Яндекс ID</Button></li>
                            <li><Button type='page' paddingX="full">Войти с VK ID</Button></li>
                        </ul>
                        <hr/>
                        <p>или</p><br/>
                        <ul>
                            <li><InputWrapper label="Введите ваш E-Mail">
                                <Input theme="dark" type="text" placeholder="E-Mail" value={"123"}
                                       callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(updateEmail(e.currentTarget.value))}/>
                            </InputWrapper></li>
                            <li><InputWrapper label="Введите ваш пароль">
                                <Input theme="dark" type="text" placeholder="Пароль" value={"1234"}
                                       callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(updatePassword(e.currentTarget.value))}/>
                            </InputWrapper></li>
                            <li><InputWrapper label="Введите ваш пароль">
                                <Input theme="dark" type="text" placeholder="Пароль" value={"1234"}
                                       callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(updatePassword(e.currentTarget.value))}/>
                            </InputWrapper></li>
                            <li><Button size='xs' type="transparentAccent" paddingX='full'>У меня уже есть аккаунт</Button></li>
                        </ul><br/>
                        <Checkbox/><span>Заполняя форму, вы соглашаетесь c нашей  <Link to='/'>политикой конфиденциальности</Link></span>
                        <br/><br/><br/><br/>
                        <Button type='lil' paddingX='full' callback={() => setRegistrationPage(2)}>Получить код подтверждения</Button>
                    </> :
                registrationPage === 2 ?
                    <>
                        <h3>Код подтверждения</h3>
                        <br/><br/>
                        <p>Введите 4 цифры из письма:</p>
                        <Input value={""} theme={"dark"} />
                        <Button size='xs' type='transparentAccent' paddingX='full'>Не пришел код подтвержения</Button>
                        <Button callback={() => setRegistrationPage(3)}>Подтвердить</Button>
                    </> :
                    <>
                        456
                    </>
            }
        </div>
    );
};

export default ShowRegistrationModal;