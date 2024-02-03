import ShowCover from "../../../showCover/ui/ShowCover.tsx";
import Authorization from "../../../authtorization/ui/Authorization.tsx";
import {modalPath} from "../enums/modalPath.ts";
import ShowNewOrder from "../../../showNewOrder/ui/ShowNewOrder.tsx";


export const modalRoutes = [
    {
        path: modalPath.COVER_VIEWER,
        element: <ShowCover />,
    },
    {
        path: modalPath.ORDER_VIEWER,
        element: <ShowNewOrder />,
    },
    {
        path: modalPath.PAYMENT_VIEWER,
        element: <ShowCover />,
    },
    {
        path: modalPath.AUTHORIZATION_VIEWER,
        element: <Authorization />,
    },
]