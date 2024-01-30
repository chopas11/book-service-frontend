import React, {useRef} from 'react';
import s from "./ServiceCard.module.css"
// import IconBlock from "../IconBlock/IconBlock.tsx";
import {Icon, InlineIcon} from '@iconify/react';
import {Button} from "../index.ts";


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
            onClick={() => setR(!r)}

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
                    {/*<IconBlock  size="48px" background="var(--background-color)" color="var(--theme-color)" >*/}
                    <Button isDark={false} width="52px" height="52px" fontSize="16px"  >
                        {
                            // !active ?
                            //     <InlineIcon  height={24} icon="maki:arrow"/>
                            //     :
                                r ?
                                    "1"
                                :
                                <InlineIcon  height={32} icon="ic:round-plus" />
                        }
                    {/*</IconBlock>*/}
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;