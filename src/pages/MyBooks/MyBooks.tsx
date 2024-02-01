import React, {useEffect} from 'react';
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
];

const MyBooks: React.FC = () => {

    useEffect(() => {
        document.title = 'Мои книги';
    }, []);

    return (
        <>
            <h2 className="header_center">Мои книги</h2>
            {/*{books.map(book => {*/}
                return <MyBookWidget />
            {/*})}*/}
        </>
    );
};

export default MyBooks;