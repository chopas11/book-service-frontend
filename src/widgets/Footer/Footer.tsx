// import React from 'react';

import s from "./Footer.module.css"
import Logo from "../../shared/ui/Logo/Logo";
import {Icon} from "@iconify/react";
import React from "react";
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className={s.footer}>
            <div>
                <Logo />
            </div>
            <div>
                <ul>
                    <Link to="/"><li>Чат поддержки</li></Link>
                    <a href="https://yandex.ru/maps/213/moscow/?ll=37.712536%2C55.755135&mode=poi&poi%5Bpoint%5D=37.712182%2C55.755264&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1160232684&z=18"><li>Юридический адрес</li></a>
                    <li>© ООО «Название»</li>
                </ul>
            </div>
            <div>
                <ul>
                    <Link to="/"><li>Главная</li></Link>
                    <Link to="/publish"><li>Публикация</li></Link>
                    <Link to="/faq"><li>FAQ</li></Link>
                </ul>
            </div>
            <div>
                <a className={s.footer_a} href="https://instagram.com"><Icon height={24} icon="lets-icons:insta-fill" /></a>
                <a className={s.footer_a} href="https://t.me/am_nikiforov"><Icon height={24} icon="ic:baseline-telegram"/></a>
                <a className={s.footer_a} href="https://vk.com/"><Icon height={24} icon="ri:vk-fill"/></a>
            </div>

        </div>
    );
};

export default Footer;