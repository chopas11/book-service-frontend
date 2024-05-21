import React from 'react';
import {IBook} from "../../entities/Book/model/types/bookSchema.ts";
import {Col, Row} from "antd";
import BookCard from "../../shared/ui/BookCard/BookCard.tsx";
import {Hint} from "../../shared/ui";

interface BooksWidgetProps {
    title?: string,
    label?: string,
    books: IBook[],
}

const BooksWidget:React.FC<BooksWidgetProps> = (
    {
        title,
        label,
        books,
    }) => {
    return (
        <div style={{marginTop: "12px"}}>
            <Row gutter={[24, 24]}>
                {
                    title ?
                        <Col xl={{span: 18}}>
                            <h2>{title}</h2>
                        </Col> : ""
                }
                {
                    label ?
                        <Col xl={{span: 6}}>
                            <Hint text={label} textColor="var(--white-color)" />
                        </Col> : ""
                }
                {
                    books.map(book => {
                        return (
                            <Col xxl={{span: 6}} xs={{span: 12}} lg={{span: 8}}>
                                <BookCard book={book}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>

    );
};

export default BooksWidget;