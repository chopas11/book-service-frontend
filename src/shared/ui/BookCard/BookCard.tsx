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
import {toggle} from "../../../features/modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../../features/modals/toggleModal/model/enums/modalPath.ts";

interface BookCardProps {
    book: IBook,
}

const BookCard:React.FC<BookCardProps> = ({book,}) => {

    const dispatch = useDispatch();

    const {cartBooks} = useTypedSelector(state => state.book)

    const toggleInCart = (e: Event) => {
        e.stopPropagation()
        dispatch(toogleInCartAction(book));
    }

    return (

            <div
                className={s.book}
                // onClick={() => dispatch(toggle({path: modalPath.DESCRIPTION_VIEWER}))}
            >
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
                    <span>{book.price}р</span>
                    <h3>{book.title}</h3>
                    <p>{book.authors.map(author => author + ", ")}</p>

                </div>
                <div className={s.book_buttons}>

                    <div className="desktop_visibility">
                        {
                            cartBooks.find(item => item.id === book.id) ?
                                <Link to='/cart'><Button type="borders">В корзине</Button></Link> :
                                <Button type="lil" callback={(e) => toggleInCart(e)}>Купить</Button>
                        }
                        <Button type="borders" paddingX="10px"><HeartIcon /></Button>
                        <Button type="borders" paddingX="12px"><BookMarkIcon /></Button>
                    </div>
                    <div className="mobile_visibility">
                        {
                            cartBooks.find(item => item.id === book.id) ?
                                <Link to='/cart'><Button paddingX="full" type="borders">В корзине</Button></Link> :
                                <Button paddingX="full" type="lil" callback={(e) => toggleInCart(e)}>Купить</Button>
                        }
                    </div>

                </div>
            </div>
    );
};

export default BookCard;