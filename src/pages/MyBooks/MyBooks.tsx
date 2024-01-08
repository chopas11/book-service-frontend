import React from 'react';
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import {Col, Row} from "antd";
import MyBookWidget from "../../widgets/MyBookWidget/MyBookWidget.tsx";
import {Book} from "../../entities/Book/model/types/bookSchema.ts";


const books: Array<Book> = [
    {
        id: 1,
        title: "Дивный мир",
        authorList: ["Алексей Владимирович Платонов"],
        bookStatus: "Опубликована",
        price: 300,
        description: "Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку. Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку. Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку.",
    },
    {
        id: 2,
        title: "Дивный мир 2",
        authorList: ["Алексей Владимирович Платонов"],
        bookStatus: "В модерации",
        price: 300,
        description: "Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку. Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку. Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку.",
    },
    {
        id: 3,
        title: "Дивный мир 3",
        authorList: ["Алексей Владимирович Платонов"],
        bookStatus: "В модерации",
        price: 300,
        description: "Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку. Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку. Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку.",
    },
];

const MyBooks: React.FC = () => {
    return (
        <div>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} xl={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <h2 className="header_center">Опубликованные книги</h2>
                    {books.map(book => {
                        return <MyBookWidget book={book} />
                    })}
                    <Footer />
                </Col>
            </Row>
        </div>
    );
};

export default MyBooks;