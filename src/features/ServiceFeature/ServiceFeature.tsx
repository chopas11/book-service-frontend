import React from 'react';
import s from "./ServiceFeature.module.css"
import IconBlock from "../../shared/ui/IconBlock/IconBlock";
import { Icon } from '@iconify/react';


interface ServiceFeatureProps {
    title: string,
    description: string,
    price: number,
    active: boolean,
    isChosen: boolean,
    callback: React.EventHandler<never>,
}
const ServiceFeature:React.FC<ServiceFeatureProps> = ({title, description, price, active, isChosen, callback}) => {

    // const [chosen] = useState(false);

    // const addServiceToCart = (title, description, price) => {
    //     if (active) {
    //         if (chosen === false) {
    //             setChosen(true)
    //             console.log({title, description, price})
    //         } else {
    //             setChosen(false)
    //             console.log("Услуга убрана");
    //         }
    //     }
    // };

    return (
        <div
            className={s.service}
            // onClick={() => addServiceToCart(title, description, price)}
            onClick={callback}
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
                    <IconBlock  size="48px" background="#ffffff" >
                        {
                            !active ?
                                <Icon icon="maki:arrow" />
                                :
                            isChosen ?
                                <Icon height={32} icon="mdi:success" />
                                :
                                <Icon height={32} icon="ic:round-plus" />
                        }
                    </IconBlock>
                </div>
            </div>

        </div>
    );
};

export default ServiceFeature;