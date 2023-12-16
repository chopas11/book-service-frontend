// import React from 'react';

import s from "./Footer.module.css"
import Logo from "../../shared/ui/Logo/Logo";

const Footer: React.FC = () => {
    return (
        <div className={s.footer}>
            <div>
                <Logo />
            </div>
            <div>
                <ul>
                    <li>Чат поддержки</li>
                    <li>Юридический адрес</li>
                    <li>© ООО «Название»</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Главная</li>
                    <li>Публикация</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>Иконки</div>

        </div>
    );
};

export default Footer;