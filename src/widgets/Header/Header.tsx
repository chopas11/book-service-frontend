import React from 'react';

import s from "./Header.module.css"
import Logo from "../../shared/ui/Logo/Logo";
import BellIcon from "../../shared/assets/IconPack/BellIcon/BellIcon";
import ProfileIcon from "../../shared/assets/IconPack/ProfileIcon/ProfileIcon";
import IconBlock from "../../shared/ui/IconBlock/IconBlock";

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <Logo />
            <div className={s.navbar}>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/">Публикация</a></li>
                    <li><a href="/">FAQ</a></li>
                </ul>
            </div>
            <div className={s.headers_menu}>
                <IconBlock>
                    <BellIcon />
                </IconBlock>
                <IconBlock>
                    <ProfileIcon />
                </IconBlock>

            </div>
        </div>
    );
};

export default Header;