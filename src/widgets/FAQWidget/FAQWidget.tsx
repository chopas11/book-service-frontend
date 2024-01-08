import React, {useState} from 'react';
import s from "./FAQWidget.module.css"

import {Question} from "../../pages/FAQ/FAQ.tsx"
import FaqCard from "../../shared/ui/FAQCard/FAQCard.tsx";
import ArrowIcon from "../../shared/assets/IconPack/ArrowIcon/ArrowIcon.tsx";
import {Col, Row} from "antd";

interface FAQWidgetProps {
    name: string,
    questions: Question[],
    initialVisibility: boolean,
}

const FaqWidget: React.FC<FAQWidgetProps> = ({name, questions, initialVisibility}) => {

    const [isQusetionVisible, setQusetionVisible] = useState(initialVisibility);


    const toggleQuestions = () => {
        setQusetionVisible(!isQusetionVisible);
    };

    return (
        <div className={s.faqWidget}>
            <div
                className={s.spoiler}
                onClick={() => toggleQuestions()}
            >
                <p>{name}</p>
                <span className={s.spoilerButton}><ArrowIcon /></span>
            </div>
            <Row gutter={[12, 12]}>
                {
                    isQusetionVisible ?
                    questions.map(item => {
                    if (item.section === name) {
                        return (
                            <Col xl={{span: 8}}>
                                <FaqCard question={item} />
                            </Col>
                        )
                    }
                })
                :
                        ""
                }
            </Row>


        </div>
    );
};

export default FaqWidget