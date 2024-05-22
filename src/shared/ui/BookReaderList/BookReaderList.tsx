import React from 'react';
import BookReaderCard from "../BookReaderCard/BookReaderCard.tsx";
import {IBook} from "../../../entities/Book/model/types/bookSchema.ts";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";

interface BookReaderListProps {
    books: IBook[]
}

const BookReaderList:React.FC<BookReaderListProps> = ({books}) => {
    return (
        <Row gutter={[12, 12]}>
            { books.length > 0 ?
                books.map(book => {
                    return (
                        <Col md={{span: 12}} xs={{span: 24}}>
                            <BookReaderCard book={book} />
                        </Col>

                    )
                }) :
                <Col xs={{span: 24}}>
                    <div className="header_center">
                        <h2>Пока вы не добавили ни одной книги. <br/><Link to={"/catalog"}>Перейти к покупкам</Link></h2>
                    </div>
                </Col>
            }
        </Row>
    );
};

export default BookReaderList;