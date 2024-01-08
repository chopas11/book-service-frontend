import {RouteProps} from "react-router-dom";
import Main from "../../../../pages/Main/Main.tsx";
import Publication from "../../../../pages/Publication/Publication.tsx";
import Faq from "../../../../pages/FAQ/FAQ.tsx";
import MyBooks from "../../../../pages/MyBooks/MyBooks.tsx";


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

]