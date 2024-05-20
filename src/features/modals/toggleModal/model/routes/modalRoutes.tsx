import ShowCoverModal from "../../../showCoverModal/ui/ShowCoverModal.tsx";
import ShowAuthModal from "../../../showAuthModal/ui/ShowAuthModal.tsx";
import {modalPath} from "../enums/modalPath.ts";
import ShowOrderModal from "../../../showOrderModal/ui/ShowOrderModal.tsx";
import ShowPaymentModal from "../../../showPaymentModal/ui/ShowPaymentModal.tsx";
import ShowBookDescription from "../../../showBookDescription/ui/ShowBookDescription.tsx";


export const modalRoutes = [
    {
        path: modalPath.COVER_VIEWER,
        element: <ShowCoverModal />,
    },
    {
        path: modalPath.ORDER_VIEWER,
        element: <ShowOrderModal />,
    },
    {
        path: modalPath.PAYMENT_VIEWER,
        element: <ShowPaymentModal />,
    },
    {
        path: modalPath.AUTHORIZATION_VIEWER,
        element: <ShowAuthModal />,
    },
    {
        path: modalPath.DESCRIPTION_VIEWER,
        element: <ShowBookDescription />
    },
]