import React from 'react';
import {Link} from "react-router-dom";
import s from "./BookCard.module.css"
import {Button, TextWrapper} from "../index.ts";
import HeartIcon from "../../assets/IconPack/HeartIcon/HeartIcon.tsx";
import BookMarkIcon from "../../assets/IconPack/BookMarkIcon/BookMarkIcon.tsx";
import RateIcon from "../../assets/IconPack/RateIcon/RateIcon.tsx";
import {IBook} from "../../../entities/Book/model/types/bookSchema.ts";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {toogleInCartAction} from "../../../entities/Book/model/slice/bookReducer.ts";

interface BookCardProps {
    book: IBook,
}

const BookCard:React.FC<BookCardProps> = ({book,}) => {

    const dispatch = useDispatch();

    const {cartBooks} = useTypedSelector(state => state.book)

    return (

            <div className={s.book}>
                {/*<Link to={"/book/" + book.id}>*/}
                    <div className={s.book_img}>
                        <div className={s.book_labels}>
                            <TextWrapper padding="3px 6px" background="var(--black-color)" color="var(--white-color)" size="xs"><RateIcon /> 4.8</TextWrapper>
                            <TextWrapper padding="3px 6px" size="xs">{book.geners[0]}</TextWrapper>
                        </div>
                        <img src={book.coverImage} alt="image"/>
                    </div>
                {/*</Link>*/}
                <div className={s.book_description}>
                    <h3>{book.title}</h3>
                    <p>{book.authors.map(author => author + ", ")}</p>
                    <span>{book.price}р</span>
                </div>
                <div className={s.book_buttons}>
                    {
                        cartBooks.find(item => item.id === book.id) ?
                            <Button type="borders" callback={() => dispatch(toogleInCartAction(book))}>В корзине</Button> :
                            <Button type="lil" callback={() => dispatch(toogleInCartAction(book))}>Купить</Button>
                    }

                    <Button type="borders" paddingX="10px"><HeartIcon /></Button>
                    <Button type="borders" paddingX="12px"><BookMarkIcon /></Button>
                </div>
            </div>
    );
};

export default BookCard;