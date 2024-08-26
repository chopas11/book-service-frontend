import React from 'react';
import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import AdvantagesWidget from "../../widgets/AdvantagesWidget/AdvantagesWidget";
import HowToAuthorWidget from "../../widgets/HowToAuthorWidget/HowToAuthorWidget";
import ServicesExamplesWidget from "../../widgets/ServicesExamplesWidget/ServicesExamplesWidget.tsx";
import CenterButton from "../../shared/ui/CenterButton/CenterButton.tsx";
import {usePageName} from "../../shared/hooks/usePageName.ts";

import {Button, Hint} from "../../shared/ui";
import {Link} from "react-router-dom";



const Main: React.FC = () => {

    usePageName('Главная');

    return (
        <>
            <WelcomeWidget title="Станьте автором в один клик">
                <Hint text="Мы предлагаем профессиональные услуги, которые помогают тысячам писателей оформлять, издавать и продвигать книгу." />
                <Link to="/publish"><Button>Стать автором</Button></Link>
            </WelcomeWidget>
            <AdvantagesWidget />
            <ServicesExamplesWidget />
            <HowToAuthorWidget />
            <CenterButton link={'/publish'} text={'Стать автором'} />
        </>
    );
};

export default Main;