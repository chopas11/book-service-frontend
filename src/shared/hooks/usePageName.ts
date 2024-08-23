import {useEffect} from "react";


export const usePageName = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
}