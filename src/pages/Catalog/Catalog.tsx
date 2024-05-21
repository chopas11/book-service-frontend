import React from 'react';
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import BooksWidget from "../../widgets/BooksWidget/BooksWidget.tsx";
import RoleListBlock from "../../features/popups/showRoleList/ui/RoleListBlock/RoleListBlock.tsx";
import RoleListButton from "../../features/popups/showRoleList/ui/RoleListButton/RoleListButton.tsx";
import TogglePopup from "../../features/popups/togglePopup/TogglePopup.tsx";
import {Button, Input} from "../../shared/ui";
import ArrowIcon from "../../shared/assets/IconPack/ArrowIcon/ArrowIcon.tsx";
import {Col, Row} from "antd";



const Catalog:React.FC = () => {

    const {catalogBooks} = useTypedSelector(state => state.book)

    return (
        <>
            <h2 className="header_center">Каталог</h2>
            <Row>
                <Col xl={{span: 17}}>
                    {/*<Input theme="dark" />*/}
                </Col>
                <Col xl={{span: 7}}>
                    <TogglePopup feature={<p>Жанр</p>}>
                        <Button type="green">Выберите жанр <ArrowIcon /></Button>
                    </TogglePopup>
                    <TogglePopup feature={<p>Рейтинг</p>}>
                        <Button type="green">Рейтинг <ArrowIcon /></Button>
                    </TogglePopup>
                    <TogglePopup feature={<p>Цена</p>}>
                        <Button type="green">Цена <ArrowIcon /></Button>
                    </TogglePopup>
                </Col>
            </Row>
            <BooksWidget books={catalogBooks} />

        </>
    );
};

export default Catalog;