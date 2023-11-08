import React from 'react';
import {Route, Routes} from "react-router-dom";
import BookViewer from "../BookViewer/BookViewer";
import Main from "../Main/Main";


const AppRouter: React.FC= (props) => {
    return (
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/view'} element={<BookViewer/>}/>
                {/*<Route path={'/'}>*/}
            </Routes>
    );
};

export default AppRouter;