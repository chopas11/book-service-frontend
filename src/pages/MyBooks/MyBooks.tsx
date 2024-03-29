import React, {useEffect} from 'react';
import MyBookWidget from "../../widgets/MyBookWidget/MyBookWidget.tsx";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import BookReaderList from "../../shared/ui/BookReaderList/BookReaderList.tsx";



const MyBooks: React.FC = () => {

    useEffect(() => {
        document.title = 'Мои книги';
    }, []);

    const {orders} = useTypedSelector(state => state.order)
    const {role} = useTypedSelector(state => state.user)
    const {myBooks} = useTypedSelector(state => state.book)

    return (
        <>
            <h2 className="header_center">Мои книги</h2>
            {
                role === "author" ?
                    orders.length > 0 ?
                        orders.map(order => {
                            return <MyBookWidget order={order} />
                        }) : <h2> У вас еще ничего нет(</h2>
                    :
                    <BookReaderList books={myBooks} />
            }

        </>
    );
};

export default MyBooks;