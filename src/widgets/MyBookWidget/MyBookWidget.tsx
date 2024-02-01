import React from 'react';
import s from "./MyBookWidget.module.css"
import {Book} from "../../entities/Book/model/types/bookSchema.ts";
import {Button} from "../../shared/ui";
import {Col, Row} from "antd";
import EditIcon from "../../shared/assets/IconPack/EditIcon/EditIcon.tsx";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import noCover from "../../shared/assets/images/no-cover.png";

const MyBookWidget: React.FC = () => {

    const {title, authors, cover} = useTypedSelector(state => state.publication)

    return (
        <div className={s.myBook}>
            <Row gutter={15}>
                <Col lg={{span: 6}}>
                    <div className={s.myBook_cover}>
                        {cover ?
                            <img src={URL.createObjectURL(cover)} style={{width: "100%", borderRadius: "12px"}} alt="Img"/>
                            :
                            <img src={noCover} style={{width: "100%", borderRadius: "12px"}} alt="Img"/>
                        }
                    </div>
                </Col>
                <Col lg={{span: 11}}>
                    <div className={s.myBook_about}>
                        <div className={s.myBook_about_title}>
                            <h3>{title}</h3>
                            <p>{authors[0]}</p>
                        </div>
                        <div className={s.myBooks_about_description}>
                            <span>О книге</span>
                            {/*<p>{book.description}</p>*/}
                        </div>
                    </div>
                </Col>
                <Col lg={{span: 7}}>
                    <div className={s.myBook_add}>
                        {/*<div className={s.myBook_add_top}>*/}
                        {/*    <div>*/}
                        {/*        <span>Статус:</span>*/}
                        {/*        <p>{book.bookStatus}</p>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <span>Цена:</span>*/}
                        {/*        <p>{book.price}р</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={s.myBook_add_bottom}>*/}
                        {/*    <Button isDark={false} height="44px" fontSize="15px">Подробнее</Button>*/}
                        {/*    <Button isDark={false} height="44px" fontSize="15px" width="44px" padding="0" top="2px"><EditIcon /></Button>*/}
                        {/*</div>*/}
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default MyBookWidget;