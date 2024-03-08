import React from 'react';
import s from "./BookNameCard.module.css"

interface BookNameCardProps {
    title: string,
    authors: Array<string>,
    bgColor?: string
}

const BookNameCard: React.FC<BookNameCardProps> = ({title, authors, bgColor = 'blue'}) => {
    return (
        <div
            style={{
                background: `var(--${bgColor}-color)`
            }}
            className={s.bookName}>
            <h3>{title}</h3>
            <p>{authors.map(author => author + " ")}</p>
        </div>
    );
};

export default BookNameCard;