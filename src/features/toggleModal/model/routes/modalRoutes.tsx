import ShowCover from "../../../showCover/ui/ShowCover.tsx";
import Authorization from "../../../authtorization/ui/Authorization.tsx";
import {modalPath} from "../enums/modalPath.ts";
import ShowNewOrder from "../../../showNewOrder/ui/ShowNewOrder.tsx";
import ShowPayment from "../../../showPayment/ui/ShowPayment.tsx";


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
        element: <ShowPayment />,
    },
    {
        path: modalPath.AUTHORIZATION_VIEWER,
        element: <Authorization />,
    },
]