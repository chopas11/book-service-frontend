import React from 'react';
import {Link} from "react-router-dom";
import ShowNotifications from "../../features/popups/showNotifications/ui";
import ShowMiniProfile from "../../features/popups/showMiniProfile/ui";
import {Button, Input, Logo} from "../../shared/ui";
import s from "./Header.module.css"
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import ShowRoleList from "../../features/popups/showRoleList/ui";
import ShowCart from "../../features/showCart/ui/ShowCart.tsx";
import BellIcon from "../../shared/assets/IconPack/BellIcon/BellIcon.tsx";
import {Col, Row} from "antd";

const Header: React.FC = () => {

    const {isAuth, role} = useTypedSelector(state => state.user)

    return (
        <>
            <div className={s.header}>
                <Logo/>
                <div className={s.navbar}>
                    <ul>
                        <li><Link to="/"><Button size='sm'>Главная</Button></Link></li>
                        <li><Link to="/catalog"><Button size='sm'>Каталог</Button></Link></li>
                        {
                            role === 'author' ?
                                <li><Link to="/publish"><Button size='sm'>Публикация</Button></Link></li> :
                                <li><Link to="/cart"><Button size='sm'>Корзина</Button></Link></li>

                        }
                    </ul>
                </div>
                {/*<Input theme="dark" />*/}
                <div className={s.headers_menu}>
                    {
                        isAuth && role === 'reader' ?
                            <ShowCart/> : ""
                    }

                    <ShowNotifications/>
                    <ShowMiniProfile/>
                    <ShowRoleList/>
                </div>
            </div>
            <div className={s.header_mobile}>
                <Row gutter={12}>
                    <Col flex={"auto"}>
                        <Input value={""} placeholder={"Поиск"} theme={"dark"} />
                    </Col>
                    <Col flex={"50px"}>
                        <Button type="page" size='md' paddingX={"10px"} ><BellIcon /></Button>
                    </Col>
                </Row>
            </div>
        </>

    );
};

export default Header;