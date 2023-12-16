// import React from 'react';
import s from "./ServiceFeature.module.css"
// import arrow from "../../shared/assets/images/Line 11.png";

interface ServiceFeatureProps {
    title: string,
    description: string,
}

const ServiceFeature:React.FC<ServiceFeatureProps> = ({title, description}) => {
    return (
        <div className={s.service}>
            <div>
                {title}
                {/*<img src={arrow} alt="Arrow"/>*/}
            </div>
            <p>{description}</p>
        </div>
    );
};

export default ServiceFeature;