import React from 'react';
import {Link} from "react-router-dom";
import ShowNotifications from "../../features/showNotifications/ui";
import ShowMiniProfile from "../../features/showMiniProfile/ui";
import {Button, Logo} from "../../shared/ui";
import s from "./Header.module.css"

const Header: React.FC = () => {

    return (
        <div className={s.header}>
            <Logo />
            <div className={s.navbar}>
                <ul>
                    <li><Link to="/">Главная</Link>
                    </li>
                    {/*<li><Link to="/"><Button isDark={false} width="52px" height="52px" fontSize="16px">Главная</Button></Link>*/}
                    {/*</li>*/}
                    <li><Link to="/publish">Публикация</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
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