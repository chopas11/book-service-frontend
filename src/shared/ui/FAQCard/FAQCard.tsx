import React from 'react';
import s from "./FAQCard.module.css"
import {Question} from "../../../pages/FAQ/FAQ.tsx";
import ProfileIcon from "../../assets/IconPack/ProfileIcon/ProfileIcon.tsx";
import {IconBlock} from "../index.ts";
// import {IconBlock} from "../index.ts";

interface FaqCardProps {
    question: Question,
}

const FaqCard: React.FC<FaqCardProps> = ({question}) => {
    return (
        <div className={s.faqCard}>
            <div className={s.faqCard_name}>
                <IconBlock size="40px" background="white">
                    <ProfileIcon />
                </IconBlock>
                <span>{question.author}, автор</span>
            </div>
            <p>{question.author_question}</p>
            <div className={s.faqCard_name}>
                <IconBlock size="40px" background="white">
                    <ProfileIcon/>
                </IconBlock>
                <span>{question.operator}, оператор</span>
            </div>
            <p>{question.operator_response}</p>
        </div>
    );
};

export default FaqCard