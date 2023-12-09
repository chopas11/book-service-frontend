import React from 'react';
import {Route, Routes} from "react-router-dom";
import BookViewer from "../../pages/BookViewer/BookViewer";
import Main from "../../pages/Main/Main";


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