import {useLayoutEffect, useState} from "react";

export const usePages = (maxPage: number) => {

    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };


    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [currentPage]);

    return {currentPage, nextPage, prevPage};



}