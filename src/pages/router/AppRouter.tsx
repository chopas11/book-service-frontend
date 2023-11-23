import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BookViewer from "../BookViewer/BookViewer";
import Main from "../Main/Main";


const AppRouter: React.FC= (props) => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/view'} element={<BookViewer/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;