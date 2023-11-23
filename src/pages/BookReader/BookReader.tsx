import React, { useState, useEffect } from 'react';

const BookReader = ({ bookText }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const screenHeight = window.innerHeight;
    const linesPerPage = 30; // Предположительное количество строк на странице

    useEffect(() => {
        const bookContainer = document.getElementById('bookContainer');
        if (bookContainer) {
            const totalHeight = bookContainer.scrollHeight;
            const total = Math.ceil(totalHeight / screenHeight);
            setTotalPages(total);
        }
    }, [bookText, screenHeight]);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) =>
            prevPage < totalPages ? prevPage + 1 : totalPages
        );
    };

    const renderTextForPage = () => {
        const lines = bookText.split('\n');
        const startLine = (currentPage - 1) * linesPerPage;
        const endLine = currentPage * linesPerPage;
        const currentPageText = lines.slice(startLine, endLine).join('\n');
        return currentPageText;
    };

    return (
        <div>
            <div
                id="bookContainer"
                style={{
                    height: '80vh',
                    overflowY: 'auto',
                    padding: '10px',
                    border: '1px solid #ccc',
                }}
            >
                <pre>{renderTextForPage()}</pre>
            </div>
            <div>
                <button onClick={handlePrevPage}>Previous Page</button>
                <span>
          Page {currentPage} of {totalPages}
        </span>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    );
};

export default BookReader;