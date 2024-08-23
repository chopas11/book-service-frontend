import React from 'react';
import FaqWidget from "../../widgets/FAQWidget/FAQWidget.tsx";

export enum QuestionsSection {
    PAYMENT = "Оплата",
    PUBLICATION = "Публикация",
    SERVICE = "Сервис",
    SUPPORT = "Поддержка",
}

export interface Question {
    id: number,
    section: QuestionsSection
    author: string,
    author_question: string,
    operator: string,
    operator_response: string,
}

const questions: Question[] = [
    {
        id: 1,
        section: QuestionsSection.PAYMENT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 2,
        section: QuestionsSection.PAYMENT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 3,
        section: QuestionsSection.PAYMENT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 4,
        section: QuestionsSection.PUBLICATION,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 5,
        section: QuestionsSection.PUBLICATION,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 6,
        section: QuestionsSection.PUBLICATION,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 7,
        section: QuestionsSection.SERVICE,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 8,
        section: QuestionsSection.SERVICE,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 9,
        section: QuestionsSection.SERVICE,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 10,
        section: QuestionsSection.SUPPORT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 11,
        section: QuestionsSection.SUPPORT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 12,
        section: QuestionsSection.SUPPORT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 13,
        section: QuestionsSection.SUPPORT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 14,
        section: QuestionsSection.SUPPORT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
    {
        id: 15,
        section: QuestionsSection.SUPPORT,
        author: "Дарья",
        author_question: "Добрый день! Я сделала заказ по ошибке и отменила его практически сразу же. Когда деньги вернутся мне на счет?",
        operator: "Олег",
        operator_response: "Добрый день. Возврат денежных средств осуществляется в течение 10 дней.",
    },
];


const Faq:React.FC = () => {


    return (
            <>
                    <h2 className="header_center">Частые вопросы</h2>
                    <FaqWidget name={QuestionsSection.PAYMENT} questions={questions} initialVisibility={true} />
                    <FaqWidget name={QuestionsSection.PUBLICATION} questions={questions} initialVisibility={false}/>
                    <FaqWidget name={QuestionsSection.SERVICE} questions={questions} initialVisibility={false}/>
                    <FaqWidget name={QuestionsSection.SUPPORT} questions={questions} initialVisibility={false}/>
            </>
    );
};

export default Faq;