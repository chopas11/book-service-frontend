import React, {useState} from 'react';

import ShowNotifications from "../../features/popups/showNotifications/ui";
import ShowMiniProfile from "../../features/popups/showMiniProfile/ui";
import {Input, Logo} from "../../shared/ui";
import s from "./Header.module.css"
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import ShowCart from "../../features/showCart/ui/ShowCart.tsx";


const Header: React.FC = () => {

    const {isAuth, role} = useTypedSelector(state => state.user)
    const [search, setSearch] = useState('');

    return (
        <>
            <div className={s.header}>
                <div className={s.header_logo}>
                    <Logo/>
                </div>
                <Input height={50} placeholder={'Поиск'} value={search} theme={'primary'} callback={(e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)} />
                <div className={s.headers_menu}>
                    <ShowNotifications/>
                    {
                        isAuth && role === 'reader' ?
                            <ShowCart/> : ""
                    }
                    <ShowMiniProfile/>
                </div>
            </div>
            <div className={s.header_mobile}>
                {/*<Row gutter={12}>*/}
                {/*    <Col flex={"auto"}>*/}
                {/*        <Input value={""} placeholder={"Поиск"} theme={"dark"} />*/}
                {/*    </Col>*/}
                {/*    <Col flex={"50px"}>*/}
                {/*        <Button type="page" size='md' paddingX={"10px"} ><BellIcon /></Button>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
        </>

    );
};

export default Header;