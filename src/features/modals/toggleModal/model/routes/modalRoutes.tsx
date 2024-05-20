import ShowCoverModal from "../../../showCoverModal/ui/ShowCoverModal.tsx";
import ShowRegistrationModal from "../../../showRegistrationModal/ui/ShowRegistrationModal.tsx";
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
        path: modalPath.REGISTRATION_VIEWER,
        element: <ShowRegistrationModal />,
    },
    {
        path: modalPath.DESCRIPTION_VIEWER,
        element: <ShowBookDescription />
    },
]