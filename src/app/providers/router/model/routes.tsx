import {RouteProps} from "react-router-dom";
import Main from "../../../../pages/Main/Main.tsx";
import Publication from "../../../../pages/Publication/Publication.tsx";
import Faq from "../../../../pages/FAQ/FAQ.tsx";
import MyBooks from "../../../../pages/MyBooks/MyBooks.tsx";
import Edit from "../../../../pages/Edit/Edit.tsx";
import Statistics from "../../../../pages/Statistics/Statistics.tsx";
import History from "../../../../pages/History/History.tsx";
import Profile from "../../../../pages/Profile/Profile.tsx";
import NotFound from "../../../../pages/NotFound/NotFound.tsx";


export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
}

export const routes: AppRouterProps[] = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/publish",
        element: <Publication />,
        authOnly: true,
    },
    {
        path: "/faq",
        element: <Faq />,
        authOnly: true,
    },
    {
        path: "/mybooks",
        element: <MyBooks />,
        authOnly: true,
    },
    {
        path: "/edit",
        element: <Edit />,
        authOnly: true,
    },
    {
        path: "/statistics",
        element: <Statistics />,
        authOnly: true,
    },
    {
        path: "/history",
        element: <History />,
        authOnly: true,
    },
    {
        path: "/profile",
        element: <Profile />,
        authOnly: true,
    },
    {
        path:  "*",
        element: <NotFound />,
    }

]