// import React from 'react';

import s from "./HowToAuthorWidget.module.css"
import StepFeature from "../../features/StepFeature/StepFeature";
import Button from "../../shared/ui/Button/Button";
import {Link} from "react-router-dom";

const steps = [
    {
        number: 1,
        text: "Мы экономим ваше время, предлагая простую цепочку публикации - заполните поля, загрузите материал, выберите тариф.",
    },
    {
        number: 2,
        text: "Мы экономим ваше время, предлагая простую цепочку публикации - заполните поля, загрузите материал, выберите тариф.",
    },
    {
        number: 3,
        text: "Мы экономим ваше время, предлагая простую цепочку публикации - заполните поля, загрузите материал, выберите тариф.",
    },
];

const HowToAuthorWidget = () => {
    return (
        <div className={s.howToAuthorWidget}>
            <h2>Как стать автором?</h2>
            <div className={s.steps}>
                {
                    steps.map(item => {
                        return (
                            <StepFeature number={item.number} text={item.text} />
                        )
                    })
                }
            </div>
            <div className={s.bottom}>
                <Link to="/publish">
                    <Button width="300px" height="60px" fontSize="20px" isDark={true}>
                        Стать автором
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HowToAuthorWidget;