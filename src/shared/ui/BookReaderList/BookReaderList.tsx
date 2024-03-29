import React from 'react';
import BookReaderCard from "../BookReaderCard/BookReaderCard.tsx";
import {IBook} from "../../../entities/Book/model/types/bookSchema.ts";
import {Col, Row} from "antd";

interface BookReaderListProps {
    books: IBook[]
}

const BookReaderList:React.FC<BookReaderListProps> = ({books}) => {
    return (
        <Row gutter={[12, 12]}>
            {
                books.map(book => {
                    return (
                        <Col xl={{span: 12}}>
                            <BookReaderCard book={book} />
                        </Col>

                    )
                })
            }
        </Row>
    );
};

export default BookReaderList;