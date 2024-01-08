import React from 'react';
import s from "./MyBookWidget.module.css"
import {Book} from "../../entities/Book/model/types/bookSchema.ts";
import {Button} from "../../shared/ui";
import {Col, Row} from "antd";
import EditIcon from "../../shared/assets/IconPack/EditIcon/EditIcon.tsx";

interface MyBookWidgetProps {
    book: Book,
}

const MyBookWidget: React.FC<MyBookWidgetProps> = ({book}) => {
    return (
        <div className={s.myBook}>
            <Row gutter={15}>
                <Col lg={{span: 6}}>
                    <div className={s.myBook_cover}>
                        <img src="" alt=""/>
                    </div>
                </Col>
                <Col lg={{span: 11}}>
                    <div className={s.myBook_about}>
                        <div className={s.myBook_about_title}>
                            <h3>{book.title}</h3>
                            <p>{book.authorList[0]}</p>
                        </div>
                        <div className={s.myBooks_about_description}>
                            <span>О книге</span>
                            <p>{book.description}</p>
                        </div>
                    </div>
                </Col>
                <Col lg={{span: 7}}>
                    <div className={s.myBook_add}>
                        <div className={s.myBook_add_top}>
                            <div>
                                <span>Статус:</span>
                                <p>{book.bookStatus}</p>
                            </div>
                            <div>
                                <span>Цена:</span>
                                <p>{book.price}р</p>
                            </div>
                        </div>
                        <div className={s.myBook_add_bottom}>
                            <Button isDark={false} height="44px">Подробнее</Button>
                            <Button isDark={false} height="44px" width="44px" padding="0" top="2px"><EditIcon /></Button>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default MyBookWidget;