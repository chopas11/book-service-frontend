import React, {useEffect} from 'react';
import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import AdvantagesWidget from "../../widgets/AdvantagesWidget/AdvantagesWidget";
import ServicesWidget from "../../widgets/ServicesWidget/ServicesWidget";
import HowToAuthorWidget from "../../widgets/HowToAuthorWidget/HowToAuthorWidget";
import {Button, Hint} from "../../shared/ui";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";


const Main: React.FC = () => {

    const welcomeData: {title: string, description: string} = {
        title: "Станьте автором в один клик",
        description: "Мы предлагаем профессиональные услуги, которые помогают тысячам писателей оформлять, издавать и продвигать книгу.",
    }


    const services = [
    {
        id: 1,
        title: "Дизайн",
        description: "Уникальная обложка от проффесионального дизайнера.",
        price: 200,
        step: 1,
    },
    {
        id: 2,
        title: "Вёрстка",
        description: "Выбор размера, формата издания, шрифта расположение текста и т.д.",
        price: 200,
        step: 1,
    },
    {
        id: 3,
        title: "Нейросеть",
        description: "Текстовые нейросети помогают авторам найти вдохновение.",
        price: 200,
        step: 1,
    },
    {
        id: 4,
        title: "Редактура",
        description: "Редактор исправляет стилистические неточности, подбирает более удачные словосочетания и эпитеты.",
        price: 200,
        step: 1,
    },
    {
        id: 5,
        title: "Корректура",
        description: "Корректор выявляет и исправляет ошибки орфографического/ стилистического характера, опечатки.",
        price: 200,
        step: 1,
    },
    {
        id: 6,
        title: "Маркетинг",
        description: "Создание интригующей аннотации, содержащей намек на проблему или конфликт, которую должен разрешить герой или автор.",
        price: 200,
        step: 1,
    },
    {
        id: 7,
        title: "Модерация",
        description: "Процесс изучения ваших материалов для оценки качества подготовки текста к публикации.",
        price: 200,
        step: 1,
    },
];

    useEffect(() => {
        document.title = 'StorySphere - Сервис для авторов';
    }, []);

    const {role} = useTypedSelector(state => state.user)

    return (
        <>
            {
                role === 'author' ?
                <>
                    <WelcomeWidget title={welcomeData.title}>
                        <Hint text="Мы предлагаем профессиональные услуги, которые помогают тысячам писателей оформлять, издавать и продвигать книгу." textSize="16px" />
                        <Link to="/publish"><Button>Подробнее</Button></Link>
                    </WelcomeWidget>
                    <AdvantagesWidget />
                    <ServicesWidget services={services} step={1} isActive={false} />
                    <HowToAuthorWidget />
                </> :
                <>
                <WelcomeWidget title="-30% на комиксы и мангу">
                <Hint text="Только с 29 февраля по 4 марта" textSize="16px" />
                <Link to="/catalog"><Button>В каталог</Button></Link>
                </WelcomeWidget>
                {/*<HowToAuthorWidget />*/}
                </>
            }
        </>
    );
};

export default Main;