import React, {useState} from 'react';
import {Col, Row} from "antd";
import Header from "../../widgets/Header/Header";
import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import Footer from "../../widgets/Footer/Footer";
import ServiceCard from "../../shared/ui/ServiceCard/ServiceCard.tsx";
import PublishStep from "../../shared/ui/PublishStep/PublishStep.tsx";
import {Button, Input, InputWrapper, Select, StarText, Textarea, TextWrapper} from "../../shared/ui";

import s from "./Publication.module.css"
import ChooseTariff from "../../features/chooseTariff/ui";
import ServicesList from "../../shared/ui/ServicesList/ServicesList.tsx";
import ServicesWidget from "../../widgets/ServicesWidget/ServicesWidget.tsx";
import servicesWidget from "../../widgets/ServicesWidget/ServicesWidget.tsx";
import UploadBookFile from "../../features/uploadBookFile/ui/UploadBookFile.tsx";
import UploadCover from "../../features/uploadCover/ui/UploadCover.tsx";




const services: IService[] = [
    {
        id: 1,
        step: 1,
        title: "Неймер",
        description: "Он придумывает яркие, звучные и запоминающиеся комбинации.",
        price: 300,
        // isChosen: false,
    },
    {
        id: 2,
        step: 1,
        title: "Нейросеть",
        description: "Нейросети помогают авторам, найти источник вдохновения и креативности, синтезируя идеи, стилистику и сюжеты.",
        price: 50,
    },
    {
        id: 3,
        step: 2,
        title: "Маркетинг",
        description: "Создание интригующей аннотации, содержащей намек на проблему или конфликт, которую должен разрешить герой или автор.",
        price: 1500,
    },
    {
        id: 4,
        step: 2,
        title: "Нейросеть",
        description: "Нейросети помогают авторам, найти источник вдохновения и креативности, синтезируя идеи, стилистику и сюжеты.",
        price: 300,
    },
    {
        id: 5,
        step: 3,
        title: "Редактура",
        description: "Редактор исправляет стилистические неточности, подбирает более удачные словосочетания и эпитеты.",
        price: 1500,
    },
    {
        id: 6,
        step: 3,
        title: "Корректура",
        description: "Корректор выявляет и исправляет ошибки орфографического/ стилистического характера, опечатки.",
        price: 1500,
    },
    {
        id: 7,
        step: 3,
        title: "Вёрстка",
        description: "Выбор размера, формата издания, шрифта расположение текста и т.д.",
        price: 50,
    },
    {
        id: 8,
        step: 4,
        title: "Дизайн",
        description: "Уникальная обложка от проффесионального дизайнера.",
        price: 150,
    },
];

const Publication: React.FC = () => {

    // Local State
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookAnnotation, setBookAnnotation] = useState("");
    const [bookFile, setBookFile] = useState<File>();
    // const [bookGenres, setBookGenres] = useState([]);
    const [bookAddServices, setBookAddServices] = useState([]);
    const [price, setPrice] = useState(9000);
    // const [tariff, setTariff] = useState(-1)

    //Pages of form
    const[publishPage, setPublishPage] = useState(1);

    // Временно отключим на время разработки
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [publishPage]);

    /**
     * add services into state.
     * @addServices
     * @param {Object} item - The title of the book.
     */
    const addServices = (item: Object) => {

        if (bookAddServices.find(elem => elem.id === item.id)) {
            setBookAddServices(bookAddServices.filter( elem => {
                return elem.id !== item.id
            }));
            setPrice(price - item.price);
            console.log("Removing service", item)
        } else {
            setBookAddServices([...bookAddServices, item]);
            setPrice(price + item.price);
            console.log("Adding service", item)
        }




    }

    const uploadFile = (e) => {
        if (e.target.files)
            setBookFile(e.target.files[0]);
    }


    return (
        <div>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} xl={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <WelcomeWidget title="Публикация книги" description="Пройдитесь по всем этапам, следуйте рекомендациям и опубликуйте книгу!" />

                    {publishPage === 2 ?
                        <>
                            <ChooseTariff />

                            <h2>Услуги, которые вы выбрали</h2><br/>
                            <Row gutter={[12,12]}>
                                { bookAddServices.length > 0 ? bookAddServices.map(item => {
                                    return (
                                        <Col xl={{ span: 6 }} >
                                            <ServiceCard
                                                key={item.id}
                                                title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                active={true}
                                                isChosen={true}
                                                callback={() => addServices(item)}
                                            />
                                        </Col>
                                    )
                                }) :
                                    "Вы еще не выбрали ничего"}
                            </Row>

                            <h2>{price > 0 ? "К оплате" : "Перейти к оформлению"}</h2>
                            { price > 0 && <TextWrapper background="var(--background-color)" border="1px solid var(--theme-color)" color="var(--theme-color)" fontSize="20px">{price}р</TextWrapper>}
                            <Button isDark={true} callback={() => setPublishPage(1)}>Вернуться</Button>
                            <Button callback={() => takePayment()} isDark={true} fontSize="12px">
                                {price > 0 ? "Перейти к оплате" : "Продолжить"}</Button>
                        </>
                            :
                        <>
                            <PublishStep number={1}>
                                    <Col xl={{span: 9}}>
                                        <InputWrapper label="Введите название книги">
                                            <Input type="text" placeholder="Название" value={bookName} callback={(e: Event) => setBookName(e.target.value)} />
                                        </InputWrapper>
                                    </Col>
                                    <Col xl={{span: 9}}>
                                        <InputWrapper label="Ваше авторское имя">
                                            <Input type="text" placeholder="Николай Гоголь" value={bookAuthor} callback={e => setBookAuthor(e.target.value)}/>
                                        </InputWrapper>
                                    </Col>
                                    <Col xl={{span: 4}} style={{paddingTop: "28px"}}>
                                        <Button isDark={false} fontSize="12px">Добавить автора</Button>
                                    </Col>
                                    <Col xl={{span: 11}}></Col>
                                    <Col xl={{span: 2}}>
                                        Александр Никифоров
                                    </Col>
                                </PublishStep>
                            <ServicesWidget services={services} isActive={true} step={1} />
                            <PublishStep number={2}>
                                    <Col xl={{span: 22}}>
                                        <InputWrapper label="Напишите аннтоацию для книги">
                                            <Textarea
                                                name="annotation"
                                                placeholder="Ваш текст"
                                                value={bookAnnotation}
                                                callback={e => setBookAnnotation(e.target.value)}
                                            />
                                        </InputWrapper>
                                    </Col>
                                </PublishStep>
                            <ServicesWidget services={services} isActive={true} step={2} />
                            <PublishStep number={3}>
                                <UploadBookFile />
                            </PublishStep>
                            <ServicesWidget services={services} isActive={true} step={3} />
                            <PublishStep number={4}>
                                <UploadCover />
                            </PublishStep>
                            <ServicesWidget services={services} isActive={true} step={4} />
                            <PublishStep number={5}>
                                    <Col xl={{span: 12}}>
                                        <InputWrapper label="Выберите жанр">
                                            <Select />
                                        </InputWrapper>
                                    </Col>
                                    <Col xl={{span:9}}>
                                        <InputWrapper label="Выберите возрастное ограничение">
                                            <Button isDark={false} padding="0 11px" >0+</Button>
                                            <Button isDark={false} padding="0 11px">6+</Button>
                                            <Button isDark={false} padding="0 7px">12+</Button>
                                            <Button isDark={false} padding="0 7px">16+</Button>
                                            <Button isDark={false} padding="0 7px">18+</Button>
                                        </InputWrapper>

                                    </Col>
                                </PublishStep>
                            <div className="button_center">
                                <Button
                                    width="300px"
                                    height="60px"
                                    fontSize="20px"
                                    isDark={true}
                                    callback={() => setPublishPage(2)}
                                >Продолжить</Button>
                            </div>
                        </>}
                    <Footer />
                </Col>
            </Row>
        </div>
    );
};

export default Publication;