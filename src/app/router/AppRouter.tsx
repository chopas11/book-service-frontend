import React from 'react';
import {Route, Routes} from "react-router-dom";
import BookViewer from "../../pages/BookViewer/BookViewer";
import Main from "../../pages/Main/Main";
import Publication from "../../pages/Publication/Publication";
import Faq from "../../pages/FAQ/FAQ";
import MyBooks from "../../pages/MyBooks/MyBooks";
import Uikit from "../../pages/Uikit/Uikit";


const AppRouter: React.FC= () => {
    return (
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/publish'} element={<Publication/>}/>
                <Route path={'/faq'} element={<Faq/>}/>
                <Route path={'/books'} element={<MyBooks/>}/>
                <Route path={'/uikit'} element={<Uikit/>}/>
                {/*View книжки*/}
                <Route path={'/view'} element={<BookViewer/>}/>
                {/*<Route path={'/'}>*/}
            </Routes>
    );
};

export default AppRouter;