// import React from 'react';

import s from "./Header.module.css"
import Logo from "../../shared/ui/Logo/Logo";
import BellIcon from "../../shared/assets/IconPack/BellIcon/BellIcon";
import ProfileIcon from "../../shared/assets/IconPack/ProfileIcon/ProfileIcon";
import IconBlock from "../../shared/ui/IconBlock/IconBlock";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <Logo />
            <div className={s.navbar}>
                <ul>

                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/publish">Публикация</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
            <div className={s.headers_menu} onClick={() => console.log(123)}>
                <IconBlock
                    size="50px"
                    border="1px solid #000"
                >
                    <BellIcon />
                </IconBlock>
                <IconBlock size="50px" border="1px solid #000">
                    <ProfileIcon />
                </IconBlock>

            </div>
        </div>
    );
};

export default Header;