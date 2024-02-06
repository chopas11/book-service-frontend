import React, {useRef} from 'react';
import s from "./ServiceCard.module.css"
import {InlineIcon} from '@iconify/react';
import {Button} from "../../index.ts";
import SuccessIcon from "../../../assets/IconPack/SuccessIcon/SuccessIcon.tsx";


interface ServiceCardProps {
    title: string,
    description: string,
    price: number,
    active: boolean,
    isChosen?: boolean,
    callback?: React.EventHandler<never>,
}
const ServiceCard:React.FC<ServiceCardProps> = ({title, description, price, active, isChosen, callback}) => {

    const ref = useRef<HTMLDivElement>(null)

    const [r, setR] = React.useState(false);

    const animateCard = (e) => {

        // if (ref.current) {
        //     console.log(ref.current.children[1].children)
        // }
        // const leave = () => {
        //     console.log("Leave");
        //     e.target.removeEventListener("mouseenter", leave)
        //     e.target.removeEventListener("mouseleave", leave)
        //
        // }
        // e.target.addEventListener("mouseleave", leave)
    }


    return (
        <div
            className={s.service}
            // onClick={callback}
            ref={ref}
        >
            <div className={s.serviceLeft}>
                <div>
                    {title}
                </div>
                <p>{description}</p>
            </div>
            <div className={s.serviceRight}>
                <p>{price}р</p>
                <div className={s.serviceRight_icon}>
                    {!active ?
                        <Button type='primary' size='lg' paddingX='15px'><InlineIcon  height={20} icon="maki:arrow"/></Button>
                    :
                        r ?
                            <Button type='accent' size='lg' paddingX='16px' callback={() => setR(!r)}><SuccessIcon /></Button>
                            :
                            <Button type='primary' size='lg' paddingX='9px' callback={() => setR(!r)}><InlineIcon  height={32} icon="ic:round-plus" /></Button>
                    }
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;