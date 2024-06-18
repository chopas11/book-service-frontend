// import React from 'react';

import s from "./Footer.module.css"
import Logo from "../../shared/ui/Logo/Logo";
import {Icon} from "@iconify/react";
import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {Col, Row} from "antd";
import ProfileIcon from "../../shared/assets/IconPack/ProfileIcon/ProfileIcon.tsx";
import HomeIcon from "../../shared/assets/IconPack/HomeIcon/HomeIcon.tsx";
import CatalogIcon from "../../shared/assets/IconPack/CatalogIcon/CatalogIcon.tsx";
import CartIcon from "../../shared/assets/IconPack/CartIcon/CartIcon.tsx";
import PublicationIcon from "../../shared/assets/IconPack/PublicationIcon/PublicationIcon.tsx";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";

const Footer: React.FC = () => {

    const location = useLocation();
    const {role} = useTypedSelector(state => state.user)

    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    return (
        <div className={s.footer}>
            <div>
                <Logo />
            </div>
            <div className={s.footer_list}>
                <ul>
                    <Link to="/"><li>Чат поддержки</li></Link>
                    <a href="https://yandex.ru/maps/213/moscow/?ll=37.712536%2C55.755135&mode=poi&poi%5Bpoint%5D=37.712182%2C55.755264&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1160232684&z=18"><li>Юридический адрес</li></a>
                    <li>© StorySphere.ru, {new Date().getFullYear()}</li>
                </ul>
            </div>
            <div className={s.footer_list}>
                <ul>
                    <Link to="/"><li>Главная</li></Link>
                    <Link to="/publish"><li>Публикация</li></Link>
                    <Link to="/faq"><li>FAQ</li></Link>
                </ul>
            </div>
            <div className={s.footer_social}>
                <a className={s.footer_a} href="https://instagram.com"><Icon height={24} icon="lets-icons:insta-fill" /></a>
                <a className={s.footer_a} href="https://t.me/am_nikiforov"><Icon height={24} icon="ic:baseline-telegram"/></a>
                <a className={s.footer_a} href="https://vk.com/"><Icon height={24} icon="ri:vk-fill"/></a>
            </div>
            {/*<div className={s.footer_mobile}>*/}
            {/*    <ul>*/}
            {/*        <Link to="/">*/}
            {/*            <li className={location.pathname === '/' ? s.mobile_active : ''}>*/}
            {/*                <HomeIcon/> <span>Главная</span>*/}
            {/*            </li>*/}
            {/*        </Link>*/}
            {/*        <Link to="/catalog">*/}
            {/*            <li className={location.pathname === '/catalog' ? s.mobile_active : ''}>*/}
            {/*                <CatalogIcon/> <span>Каталог</span>*/}
            {/*            </li>*/}
            {/*        </Link>*/}
            {/*        {*/}
            {/*            role === 'author' ?*/}
            {/*                <Link to="/publish">*/}
            {/*                    <li className={location.pathname === '/publish' ? s.mobile_active : ''}>*/}
            {/*                        <PublicationIcon/><span>Публикация</span>*/}
            {/*                    </li>*/}
            {/*                </Link> :*/}
            {/*                <Link to="/cart">*/}
            {/*                    <li className={location.pathname === '/cart' ? s.mobile_active : ''}>*/}
            {/*                        <CartIcon/> <span>Корзина</span>*/}
            {/*                    </li>*/}
            {/*                </Link>*/}
            {/*        }*/}


            {/*        <Link to="/profile">*/}
            {/*            <li className={location.pathname === '/profile' ? s.mobile_active : ''}>*/}
            {/*                <ProfileIcon/> <span>Профиль</span>*/}
            {/*            </li>*/}
            {/*        </Link>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
};

export default Footer;