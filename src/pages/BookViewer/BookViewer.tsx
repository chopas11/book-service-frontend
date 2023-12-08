import React, { useState, useEffect } from 'react';
import s from './BookViewer.module.css'

const BookViewer = ({ bookText }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const screenHeight = window.innerHeight;

    // Data
    const [fontSize, setFontSize] = useState(15); // Font
    const [lineHeight, setLineHeight] = useState(1.5); // line-height
    const [textAlign, setTextAlign] = useState("left"); // text-align
    const [isPadding, setIsPadding] = useState(true); // padding 0 15px
    const [columnCount, setColumnCount] = useState(1); // column-count



    // Event Listeners

    const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2); // Увеличиваем размер на 2 пункта
    };

    const decreaseFontSize = () => {
        setFontSize((prevSize) => (prevSize > 8 ? prevSize - 2 : prevSize)); // Уменьшаем размер на 2 пункта, минимальный размер 8 пунктов
    };

    useEffect(() => {
        const bookHeight = document.getElementById('bookContainer').scrollHeight;
        const total = Math.ceil(bookHeight / screenHeight);
        setTotalPages(total);
    }, [bookText, fontSize]);

    const showPage = (pageNumber) => {
        const bookContainer = document.getElementById('bookContainer');
        const start = (pageNumber - 1) * (screenHeight);
        const end = start + screenHeight;
        bookContainer.scrollTop = start;
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) =>
            prevPage < totalPages ? prevPage + 1 : totalPages
        );
    };

    useEffect(() => {
        showPage(currentPage);
    }, [currentPage, fontSize]);


    const handleTextSelection = () => {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();
        if (selectedText !== '') {
            console.log('Selected Text:', selectedText);
        }
    };

    return (
        <div>
            <div className={s.header}>

                <div>
                    <button onClick={handlePrevPage}>Previous Page</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage}>Next Page</button>
                </div>
                <button onClick={increaseFontSize}>Увеличить шрифт</button>
                <button onClick={decreaseFontSize}>Уменьшить шрифт</button>
            </div>
            <div id="content" className={s.content}>
                <div
                    className={`${s["wrapper-reader"]} ${isPadding ? s["wrapper-reader-padding"]: ''}`}
                    onMouseUp={handleTextSelection}
                    id="bookContainer"
                    style={{
                        height: '90vh',
                        overflow: 'hidden',
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        textAlign: "left",
                        // columnCount: columnCount,
                        breakInside: 'avoid'}}
                    dangerouslySetInnerHTML={{ __html: bookText }}
                ></div>
            </div>
        </div>
    );
};

export default BookViewer;