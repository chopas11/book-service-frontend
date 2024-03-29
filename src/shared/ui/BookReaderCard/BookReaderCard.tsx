import React from 'react';
import {IBook} from "../../../entities/Book/model/types/bookSchema.ts";
import Block from "../Block/Block.tsx";
import {Col, Row} from "antd";
import {Button, TextWrapper} from "../index.ts";
import s from "../BookCard/BookCard.module.css";
import RateIcon from "../../assets/IconPack/RateIcon/RateIcon.tsx";
import {Link} from "react-router-dom";

interface BookReaderCardProps {
    book: IBook,
}

const BookReaderCard:React.FC<BookReaderCardProps> = ({book}) => {
    return (
        <Block bgColor="var(--dark-color)" color="var(--white-color)" padding="12px" bdRadius="24px">
            <Row>
                <Col xl={{span: 10}}>
                    <div className={s.book_img}>
                        <div className={s.book_labels}>
                            <TextWrapper padding="3px 6px" background="var(--black-color)" color="var(--white-color)"
                                         size="xs"><RateIcon/> 4.8</TextWrapper>
                            <TextWrapper padding="3px 6px" size="xs">{book.geners[0]}</TextWrapper>
                        </div>
                        <img src={book.coverImage} alt="image"/>
                    </div>
                </Col>
                <Col xl={{span: 14}}>
                    <div className={s.book_description}>
                        <h3>{book.title}</h3>
                        <p>{book.authors.map(author => author + " ")}</p>
                        <span>{book.price}р</span>
                    </div>
                    <Link to={"/book/" + book.id}><Button type="lil">Читать</Button></Link>

                </Col>
            </Row>


        </Block>
    );
};

export default BookReaderCard;