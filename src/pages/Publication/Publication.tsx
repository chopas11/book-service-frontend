import React, {useLayoutEffect, useState} from 'react';
import {Col, Row} from "antd";
import Header from "../../widgets/Header/Header";
import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import Footer from "../../widgets/Footer/Footer";
import ServiceFeature from "../../features/ServiceFeature/ServiceFeature";
import StarTextFeature from "../../features/StarTextFeature/StarTextFeature";
import PublishStepFeature from "../../features/PublishStepFeature/PublishStepFeature";
import Button from "../../shared/ui/Button/Button";
import Input from "../../shared/ui/Input/Input";
import InputWrapper from "../../shared/ui/InputWrapper/InputWrapper";
import Textarea from "../../shared/ui/Textarea/Textarea";
import Select from "../../shared/ui/Select/Select";
import TariffFeature from "../../features/TariffFeature/TariffFeature";
import TextWrapper from "../../shared/ui/TextWrapper/TextWrapper";



const services = [
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

const tariffs = [
    {
        id: 1,
        name: "Тариф 1",
        bookPrice: 400,
        royalty: 0.5,
        conditions: [
            "Доход с каждой купленной книги сразу вам на карту",
            "Постоянная поддержка связи с автором",
            "Запрет на скриншоты текста книги",
        ]
    },
    {
        id: 2,
        name: "Тариф 2",
        bookPrice: 500,
        royalty: 0.4,
        conditions: [
            "Доход с каждой купленной книги сразу вам на карту",
            "Постоянная поддержка связи с автором",
            "Запрет на скриншоты текста книги",
        ]
    },
    {
        id: 3,
        name: "Тариф 3",
        bookPrice: 600,
        royalty: 0.3,
        conditions: [
            "Доход с каждой купленной книги сразу вам на карту",
            "Постоянная поддержка связи с автором",
            "Запрет на скриншоты текста книги",
        ]
    },
]

const Publication: React.FC = () => {

    // Local State
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookAnnotation, setBookAnnotation] = useState("");
    const [bookFile, setBookFile] = useState<File>();
    // const [bookGenres, setBookGenres] = useState([]);
    const [bookAddServices, setBookAddServices] = useState([]);
    const [price, setPrice] = useState(0);
    const [tariff, setTariff] = useState(-1)

    //Pages of form
    const[publishPage] = useState(1);

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


    const chooseTariff = (id) => {
        console.log(id);
        setTariff(id)
    }

    // Отправка формы
    const takePayment = () => {
        console.log(
            {
                bookName,
                bookAuthor,
                bookAnnotation,
                bookFile,
                // bookGenres,
                tariff,
                bookAddServices
            }
        )
    };


    return (
        <div>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <WelcomeWidget title="Публикация книги" description="Пройдитесь по всем этапам, следуйте рекомендациям и опубликуйте книгу!" />
                    {/**/}
                    <PublishStepFeature number={1}>
                        <Col xl={{span: 9}}>
                            <InputWrapper label="Введите название книги">
                                <Input type="text" placeholder="Название" value={bookName} callback={e => setBookName(e.target.value)} />
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
                    </PublishStepFeature>
                    {/**/}
                    <Row gutter={12}>
                        <Col xl={{ span: 6 }} >
                            <StarTextFeature text="Если у вас нет идей, вы можете воспользововаться услугами нашего сервиса" textSize="14px"/>
                        </Col>
                        <Col xl={{ span: 2 }}>

                        </Col>
                        {
                            services.map(item => {
                               if (item.step === 1)
                                   return (
                                       <Col xl={{ span: 6 }} >
                                           <ServiceFeature
                                               key={item.id}
                                               title={item.title}
                                               description={item.description}
                                               price={item.price}
                                               active={true}
                                               isChosen={bookAddServices.find(elem => elem.id === item.id) !== undefined}
                                               callback={() => addServices(item)}
                                           />
                                       </Col>
                                   )
                            })
                        }

                    </Row>
                    {/**/}
                    <PublishStepFeature number={2}>
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
                    </PublishStepFeature>
                    {/**/}
                    <Row gutter={16}>
                        <Col xl={{ span: 2 }}>

                        </Col>
                        {
                            services.map(item => {
                                if (item.step === 2)
                                    return (
                                        <Col xl={{ span: 6 }} >
                                            <ServiceFeature
                                                key={item.id}
                                                title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                active={true}
                                                isChosen={bookAddServices.find(elem => elem.id === item.id) !== undefined}
                                                callback={() => addServices(item)}
                                            />
                                        </Col>
                                    )
                            })
                        }
                        <Col xl={{ span: 2 }}>

                        </Col>
                        <Col xl={{ span: 6 }}>
                            <StarTextFeature text="Выберите услугу, которая сделает это за вас" textSize="16px" />
                        </Col>
                    </Row>
                    {/**/}
                    <PublishStepFeature number={3}>
                        <Col xl={{span: 9}}>
                            <InputWrapper label="Загрузите файл книги в PDF">
                                <input type="file" onChange={e => uploadFile(e)} />
                            </InputWrapper>
                        </Col>
                    </PublishStepFeature>
                    {/**/}
                    <Row gutter={[12, 12]}>
                        <Col xl={{ span: 6 }}>
                            <StarTextFeature text="Можете доверить нам проверку правильности вашей книги на текстовые ошибки и вёрстку" textSize="16px" />
                        </Col>
                        {
                            services.map(item => {
                                if (item.step === 3)
                                    return (
                                        <Col xl={{ span: 6 }} >
                                            <ServiceFeature
                                                key={item.id}
                                                title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                active={true}
                                                isChosen={bookAddServices.find(elem => elem.id === item.id) !== undefined}
                                                callback={() => addServices(item)}
                                            />
                                        </Col>
                                    )
                            })
                        }
                    </Row>
                    {/**/}
                    <PublishStepFeature number={4}>
                        <Col xl={{span: 9}}>
                            <InputWrapper label="Загрузите обложку книги в PDF, JPEG, JPG">
                                <input type="file"/>
                                <Button isDark={false} >Предпросмотр</Button>
                            </InputWrapper>
                        </Col>
                    </PublishStepFeature>
                    {/**/}
                    <Row gutter={12}>
                        <Col xl={{ span: 4 }}>

                        </Col>
                        {
                            services.map(item => {
                                if (item.step === 4)
                                    return (
                                        <Col xl={{ span: 8 }} >
                                            <ServiceFeature
                                                key={item.id}
                                                title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                active={true}
                                                isChosen={bookAddServices.find(elem => elem.id === item.id) !== undefined}
                                                callback={() => addServices(item)}/>
                                        </Col>
                                    )
                            })
                        }
                        <Col xl={{ span: 2 }}>

                        </Col>
                        <Col xl={{ span: 6 }}>
                            <StarTextFeature text="Если у вас нет обложки, мы можем сделать это за вас" textSize="16px" />
                        </Col>
                    </Row>
                    {/**/}
                    <PublishStepFeature number={5}>
                        <Col xl={{span: 12}}>
                            <InputWrapper label="Выберите жанр">
                                <Select />
                            </InputWrapper>
                        </Col>
                        <Col xl={{span:9}}>
                            <InputWrapper label="Выберите возрастное ограничение">
                                <Button isDark={false} height="40px">0+</Button>
                                <Button>6+</Button>
                                <Button>12+</Button>
                                <Button>16+</Button>
                                <Button>18+</Button>
                            </InputWrapper>

                        </Col>
                    </PublishStepFeature>

                    {/*<Button*/}
                    {/*    isDark={true}*/}
                    {/*    callback={() => setPublishPage(2)}*/}
                    {/*>Продолжить</Button>*/}

                    {/*{*/}
                    {/*    publishPage === 2 ?*/}
                    {/*        <p>Вторая страница включена</p>*/}
                    {/*        :*/}
                    {/*        <p>Ничего</p>*/}
                    {/*}*/}
                    {/*<Button*/}
                    {/*    isDark={true}*/}
                    {/*    callback={() => setPublishPage(1)}*/}
                    {/*>Вернуться</Button>*/}

                    <h2>Выберите тариф</h2><br/>
                    <Row gutter={[24,24]}>
                        {
                            tariffs.map(item => {
                                return (
                                    <Col xl={{ span: 8 }}>
                                        <TariffFeature
                                            name={item.name}
                                            bookPrice={item.bookPrice}
                                            royalty={item.royalty}
                                            isChosen={tariff === item.id}
                                            callback={() => chooseTariff(item.id)}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                        <br/>
                    <h2>Услуги, которые вы выбрали</h2><br/>
                    <Row gutter={[12,12]}>
                        { bookAddServices.length > 0 ? bookAddServices.map(item => {
                                    return (
                                        <Col xl={{ span: 6 }} >
                                            <ServiceFeature
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
                    { price > 0 && <TextWrapper background="white" color="black" fontSize="20px">{price}р</TextWrapper>}

                    <Button
                        callback={() => takePayment()}
                        isDark={true}
                        fontSize="12px"
                    >{price > 0 ? "Перейти к оплате" : "Продолжить"}</Button>
                    {/*<button onClick={() => takePayment()}>Оплатить два</button>*/}
                    <Footer />
                </Col>
            </Row>
        </div>
    );
};

export default Publication;