import React, {useEffect, useState} from 'react';

import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import PublishStep from "../../shared/ui/PublishStep/PublishStep.tsx";
import {Button, Hint} from "../../shared/ui";

import ChooseTariff from "../../features/chooseTariff/ui/ChooseTariff.tsx";
import ServicesWidget from "../../widgets/ServicesWidget/ServicesWidget.tsx";
import UploadBookFile from "../../features/uploadBookFile/ui/UploadBookFile.tsx";
import UploadCover from "../../features/uploadCover/ui/UploadCover.tsx";
import PublishBook from "../../features/publishBook/ui/PublishBook.tsx";
import SelectAge from "../../features/selectAge/ui/SelectAge.tsx";
import SelectGenre from "../../features/selectGenre/ui/selectGenre.tsx";
import UpdateDescription from "../../features/updateDescription/ui/updateDescription.tsx";
import AddAuthors from "../../features/addAuthors/ui/AddAuthors.tsx";
import UpdateTitle from "../../features/updateTitle/ui/UpdateTitle.tsx";
import {services} from "../../entities/Service/model/mocks/services.ts"


const Publication: React.FC = () => {

    //Pages of form
    const[publishPage, setPublishPage] = useState(1);

    // Временно отключим на время разработки
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [publishPage]);

    useEffect(() => {
        document.title = 'Публикация';
    }, []);

    return (
        <>
            {/*<WelcomeWidget title="Публикация книги">*/}
            {/*    <Hint text="Пройдитесь по всем этапам, следуйте рекомендациям и опубликуйте книгу!" textSize="16px" textColor="#121212" />*/}
            {/*</WelcomeWidget>*/}
            {/*{publishPage === 2 ?*/}
            {/*    <>*/}
            {/*        <ChooseTariff/>*/}
            {/*        <PublishBook/>*/}
            {/*        <div className="button_center">*/}
            {/*            <Button type='page' size='xl' paddingX='80px'*/}
            {/*                    callback={() => setPublishPage(1)}>Вернуться Назад</Button>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*    :*/}
            {/*    <>*/}
            {/*        <br/><br/>*/}
            {/*        <PublishStep number={1}>*/}
            {/*            <UpdateTitle/>*/}
            {/*            <AddAuthors />*/}
            {/*        </PublishStep>*/}
            {/*        <ServicesWidget services={services} isActive={true} step={1} />*/}
            {/*        <PublishStep number={2}>*/}
            {/*            <UpdateDescription />*/}
            {/*        </PublishStep>*/}
            {/*        <ServicesWidget services={services} isActive={true} step={2} />*/}
            {/*        <PublishStep number={3}>*/}
            {/*            <UploadBookFile />*/}
            {/*        </PublishStep>*/}
            {/*        <ServicesWidget services={services} isActive={true} step={3} />*/}
            {/*        <PublishStep number={4}>*/}
            {/*            <UploadCover />*/}
            {/*        </PublishStep>*/}
            {/*        <ServicesWidget services={services} isActive={true} step={4} />*/}
            {/*        <PublishStep number={5}>*/}
            {/*            <SelectGenre />*/}
            {/*            <SelectAge />*/}
            {/*        </PublishStep>*/}
            {/*        <div className="button_center">*/}
            {/*            <Button type='page' size='xl' paddingX='80px' callback={() => setPublishPage(2)}>Продолжить</Button>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*}*/}

            {
                publishPage === 1 ?
                    <>
                                <PublishStep number={1} name="Общая информация">
                                    <UpdateTitle/>
                                    <AddAuthors />
                                </PublishStep>
                                <ServicesWidget services={services} isActive={true} step={1} />
                                <div className="button_center">
                                    <Button type='page' size='lg' paddingX='full' callback={() => setPublishPage(2)}>Продолжить</Button>
                                </div>

                    </> :
                    publishPage === 2 ?
                        <>
                            <PublishStep number={2} name="Описание книги">
                                <UpdateDescription />
                            </PublishStep>
                            <ServicesWidget services={services} isActive={true} step={2} />
                            <div className="button_center">
                                <Button type='page' size='lg' paddingX='full' callback={() => setPublishPage(3)}>Продолжить</Button>
                            </div>
                        </>
                        :
                    publishPage === 3 ?
                        <>
                            <PublishStep number={3} name="Файл книги">
                                <UploadBookFile />
                            </PublishStep>
                            <ServicesWidget services={services} isActive={true} step={3} />
                            <div className="button_center">
                                <Button type='page' size='lg' paddingX='full' callback={() => setPublishPage(4)}>Продолжить</Button>
                            </div>
                        </> :
                        publishPage === 4 ?
                        <>
                            <PublishStep number={4} name="Обложка книги">
                                <UploadCover />
                            </PublishStep>
                            <ServicesWidget services={services} isActive={true} step={4} />
                            <div className="button_center">
                                <Button type='page' size='lg' paddingX='full' callback={() => setPublishPage(5)}>Продолжить</Button>
                            </div>
                        </> :
                        publishPage === 5 ?
                            <>
                                <PublishStep number={5} name="Возрастное ограничение и жанр">
                                    <SelectGenre />
                                    <SelectAge />
                                </PublishStep>
                                <div className="button_center">
                                    <Button type='page' size='lg' paddingX='full' callback={() => setPublishPage(6)}>Продолжить</Button>
                                </div>
                            </>
                            :
                            <>
                                <ChooseTariff/>
                                <PublishBook/>
                                {/*<br/><br/><br/><br/><br/>*/}
                            </>
            }
        </>
    );
};

export default Publication;