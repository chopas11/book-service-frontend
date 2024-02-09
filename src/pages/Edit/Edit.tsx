import React from 'react';
import PublishStep from "../../shared/ui/PublishStep/PublishStep.tsx";
import UpdateTitle from "../../features/updateTitle/ui/UpdateTitle.tsx";
import AddAuthors from "../../features/addAuthors/ui/AddAuthors.tsx";
import UpdateDescription from "../../features/updateDescription/ui/updateDescription.tsx";
import {Button} from "../../shared/ui";
import {Col, Row} from "antd";
import ShowCoverModal from "../../features/modals/showCoverModal/ui/ShowCoverModal.tsx";
import {Link} from "react-router-dom";
import ChooseTariffMini from "../../features/chooseTariffMini/ui/ChooseTariffMini.tsx";

const Edit: React.FC = () => {
    return (
        <>
            <h2 className="header_center">Редактирование</h2>
            <PublishStep number={1} bgColor="var(--lil-color)">
                <UpdateTitle/>
                <AddAuthors/>
            </PublishStep>
            <PublishStep number={2} bgColor="var(--lil-color)">
                <UpdateDescription/>
            </PublishStep>
            <Row gutter={20}>
                <Col xl={{span: 10}}>
                    <PublishStep number={3} bgColor="var(--lil-color)">
                        <ShowCoverModal />
                    </PublishStep>
                </Col>
                <Col xl={{span: 14}}>
                    <PublishStep number={4} bgColor="var(--lil-color)">
                        <ChooseTariffMini />
                        Здесь еще должен быть блок с подсказкой насчет выбора тарифа
                    </PublishStep>
                </Col>
            </Row>
            <div className="button_center">
                <Link to="/mybooks">
                    <Button type='page' size='xl' paddingX='80px'
                            callback={() => 0}>Внести изменения</Button>
                </Link>
            </div>
        </>
    );
};

export default Edit;