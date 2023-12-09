import React from 'react';

import s from "./Header.module.css"
import Logo from "../../shared/ui/Logo/Logo";

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
                <div сlassName={s.headers_menu_item}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.89453 20.6875C10.0983 21.0689 10.4019 21.3878 10.7727 21.6101C11.1436 21.8325 11.5679 21.9499 12.0004 21.9499C12.4328 21.9499 12.8571 21.8325 13.228 21.6101C13.5989 21.3878 13.9024 21.0689 14.1062 20.6875" stroke="black" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.64201 3.85678C8.50394 2.9948 9.60213 2.40778 10.7977 2.16995C11.9933 1.93213 13.2325 2.05418 14.3587 2.52067C15.4849 2.98716 16.4474 3.77715 17.1247 4.79071C17.8019 5.80428 18.1633 6.99591 18.1632 8.2149C18.1632 9.17629 18.3224 10.0788 18.5612 11.0036C18.6264 11.2137 18.7012 11.4111 18.7792 11.5973C19.1485 12.4648 20.1656 12.7624 20.9249 13.3227C22.0566 14.1615 21.8385 15.9554 20.8962 16.6526C20.8962 16.6526 19.3745 17.9689 12.0001 17.9689C4.62412 17.9689 3.10404 16.6526 3.10404 16.6526C2.16174 15.9554 1.94208 14.1615 3.07538 13.3227C3.83463 12.7624 4.85174 12.4648 5.22102 11.5973C5.5887 10.7314 5.83701 9.62356 5.83701 8.2149C5.83701 6.58021 6.48643 5.01237 7.64201 3.85678Z" stroke="black" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div сlassName={s.headers_menu_item}>
                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00053 14.9824C4.6852 14.9824 1 15.6349 1 18.2479C1 20.8609 4.66182 21.5367 9.00053 21.5367C13.3159 21.5367 17 20.8832 17 18.2713C17 15.6593 13.3392 14.9824 9.00053 14.9824Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00135 11.2554C11.8333 11.2554 14.1285 8.95909 14.1285 6.12718C14.1285 3.29528 11.8333 1 9.00135 1C6.16945 1 3.87308 3.29528 3.87308 6.12718C3.86354 8.94953 6.14394 11.2459 8.96522 11.2554H9.00135Z" stroke="black" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;