import React, {useEffect, useState} from 'react';

import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import PublishStep from "../../shared/ui/PublishStep/PublishStep.tsx";
import {Button} from "../../shared/ui";

import ChooseTariff from "../../features/chooseTariff/ui";
import ServicesWidget from "../../widgets/ServicesWidget/ServicesWidget.tsx";
import UploadBookFile from "../../features/uploadBookFile/ui/UploadBookFile.tsx";
import UploadCover from "../../features/uploadCover/ui/UploadCover.tsx";
import PublishBook from "../../features/publishBook/ui/PublishBook.tsx";
import SelectAge from "../../features/selectAge/ui/SelectAge.tsx";
import SelectGenre from "../../features/selectGenre/ui/selectGenre.tsx";
import AddAnnotation from "../../features/addAnnotation/ui/AddAnnotation.tsx";
import AddAuthors from "../../features/addAuthors/ui/AddAuthors.tsx";
import AddBookName from "../../features/addBookName/ui/AddBookName.tsx";
import {services} from "../../entities/Service/model/mocks/services.ts"


const Publication: React.FC = () => {

    //Pages of form
    const[publishPage, setPublishPage] = useState(1);

    // Временно отключим на время разработки
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [publishPage]);

    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //         event.preventDefault();
    //         console.log(123)
    //     };
    //     window.addEventListener('beforeunload', handleBeforeUnload);
    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);

    return (
        <>
                    <WelcomeWidget title="Публикация книги" description="Пройдитесь по всем этапам, следуйте рекомендациям и опубликуйте книгу!" />

                    {publishPage === 2 ?
                        <>
                            <Button isDark={true} callback={() => setPublishPage(1)}>Вернуться</Button>
                            <ChooseTariff />
                            <PublishBook />
                        </>
                            :
                        <>
                            <PublishStep number={1}>
                                    <AddBookName />
                                    <AddAuthors />
                                </PublishStep>
                            <ServicesWidget services={services} isActive={true} step={1} />
                            <PublishStep number={2}>
                                <AddAnnotation />
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
                                    <SelectGenre />
                                    <SelectAge />
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
        </>
    );
};

export default Publication;