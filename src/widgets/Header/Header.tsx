import React from 'react';
import {Link} from "react-router-dom";
import ShowNotifications from "../../features/popups/showNotifications/ui";
import ShowMiniProfile from "../../features/popups/showMiniProfile/ui";
import {Button, Logo} from "../../shared/ui";
import s from "./Header.module.css"

const Header: React.FC = () => {

    return (
        <div className={s.header}>
            <Logo />
            <div className={s.navbar}>
                <ul>
                    <li><Link to="/"><Button size='sm'>Главная</Button></Link></li>
                    <li><Link to="/publish"><Button size='sm'>Публикация</Button></Link></li>
                    <li><Link to="/faq"><Button size='sm'>FAQ</Button></Link></li>
                </ul>
            </div>
            <div className={s.headers_menu}>
                <ShowNotifications/>
                <ShowMiniProfile />
            </div>
        </div>
    );
};

export default Header;