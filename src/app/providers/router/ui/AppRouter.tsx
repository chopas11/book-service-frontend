import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../model/routes.tsx";
import RequireAuth from "./RequireAuth.tsx";


const AppRouter: React.FC = () => {
    return (
            <Routes>
                {routes.map(route => {
                    return <Route
                        key={route.path}
                        path={route.path}
                        element={
                            route.authOnly ? (
                                <RequireAuth>
                                    {route.element}
                                </RequireAuth>
                            ) : route.element
                        }
                        />
                })}
            </Routes>
    );
};

export default AppRouter;