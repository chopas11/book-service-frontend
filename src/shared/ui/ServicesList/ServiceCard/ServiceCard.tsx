import React from 'react';
import s from "./ServiceCard.module.css"
import {InlineIcon} from '@iconify/react';
import {Button, TextWrapper} from "../../index.ts";
import SuccessIcon from "../../../assets/IconPack/SuccessIcon/SuccessIcon.tsx";
import {useDispatch} from "react-redux";
import {addService, deleteService} from "../../../../features/publishBook/model/slice/publicationReducer.ts";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {IService} from "../../../../entities/Service/model/types/ServiceSchema.ts";


interface ServiceCardProps {
    service: IService,
    active: boolean,
}
const ServiceCard:React.FC<ServiceCardProps> = ({service, active}) => {



    const dispatch = useDispatch()

    const {services} = useTypedSelector(state => state.publication)

    const isChosen = services.find(item => item.id === service.id) !== undefined

    const [r, setR] = React.useState(isChosen);

    const chooseService = () => {
        if (!r) {
            dispatch(addService(service))
        } else {
            dispatch(deleteService(service.id))
        }
        setR(!r)
    }

    return (
        <div className={s.service}>
            <div className={s.serviceLeft}>
                <TextWrapper background="var(--green-color)" size='md' weight='bold'>{service.title}</TextWrapper>
                <p>{service.description}</p>
            </div>
            <div className={s.serviceRight}>
                <p>{service.price}р</p>
                <div className={s.serviceRight_icon}>
                    {!active ?
                        <Button type='primary' size='lg' paddingX='15px'><InlineIcon  height={20} icon="maki:arrow"/></Button>
                    :
                        r ?
                            <Button type='accent' size='lg' paddingX='16px' callback={() => chooseService()}><SuccessIcon /></Button>
                            :
                            <Button type='primary' size='lg' paddingX='9px' callback={() => chooseService()}><InlineIcon  height={32} icon="ic:round-plus" /></Button>
                    }
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;