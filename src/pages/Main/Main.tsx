import React from 'react';
import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import AdvantagesWidget from "../../widgets/AdvantagesWidget/AdvantagesWidget";
import HowToAuthorWidget from "../../widgets/HowToAuthorWidget/HowToAuthorWidget";
import ServicesExamplesWidget from "../../widgets/ServicesExamplesWidget/ServicesExamplesWidget.tsx";
import CenterButton from "../../shared/ui/CenterButton/CenterButton.tsx";
import {usePageName} from "../../shared/hooks/usePageName.ts";

import {Button, Hint} from "../../shared/ui";
import {Link} from "react-router-dom";

import { useTranslation } from 'react-i18next';



const Main: React.FC = () => {


    const { t } = useTranslation();
    usePageName(t('footerList_item3'));

    return (
        <>
            <WelcomeWidget title={t('welcomeWidget_title')}>
                <Hint text={t('welcomeWidget_hint')} />
                <Link to="/publish"><Button>{t('becomeAnAutor')}</Button></Link>
            </WelcomeWidget>
            <AdvantagesWidget />
            <ServicesExamplesWidget />
            <HowToAuthorWidget />
            <CenterButton link={'/publish'} text={t('becomeAnAutor')} />
        </>
    );
};

export default Main;