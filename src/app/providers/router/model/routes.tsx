import {RouteProps} from "react-router-dom";
import Main from "../../../../pages/Main/Main.tsx";
import Publication from "../../../../pages/Publication/Publication.tsx";
import Faq from "../../../../pages/FAQ/FAQ.tsx";
import MyBooks from "../../../../pages/MyBooks/MyBooks.tsx";
import Edit from "../../../../pages/Edit/Edit.tsx";
import Statistics from "../../../../pages/Statistics/Statistics.tsx";
import Orders from "../../../../pages/Orders/Orders.tsx";
import Profile from "../../../../pages/Profile/Profile.tsx";
import NotFound from "../../../../pages/NotFound/NotFound.tsx";
import Catalog from "../../../../pages/Catalog/Catalog.tsx";


export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
    role?: Role
}
export enum RoleTypes {
    ALL_ROLE = 'all',
    AUTHOR_ROLE = 'author',
    READER_ROLE = 'reader',
}
export type Role = 'all' | 'author' | 'reader'

export const routes: AppRouterProps[] = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/publish",
        element: <Publication />,
        authOnly: true,
        role: RoleTypes.AUTHOR_ROLE
    },
    {
        path: "/faq",
        element: <Faq />,
        authOnly: true,
        role: RoleTypes.ALL_ROLE
    },
    {
        path: "/mybooks",
        element: <MyBooks />,
        authOnly: true,
        role: RoleTypes.AUTHOR_ROLE
    },
    {
        path: "/edit/:id",
        element: <Edit />,
        authOnly: true,
        role: RoleTypes.AUTHOR_ROLE
    },
    {
        path: "/statistics",
        element: <Statistics />,
        authOnly: true,
        role: RoleTypes.AUTHOR_ROLE
    },
    {
        path: "/history",
        element: <Orders />,
        authOnly: true,
        role: RoleTypes.AUTHOR_ROLE
    },
    {
        path: "/profile",
        element: <Profile />,
        authOnly: true,
        role: RoleTypes.ALL_ROLE
    },
    {
        path: "/catalog",
        element: <Catalog />,
        authOnly: true,
        role: RoleTypes.ALL_ROLE
    },
    {
        path:  "*",
        element: <NotFound />,
    }

]