import React from 'react';
import MyBookCard from "../../shared/ui/MyBookCard/MyBookCard.tsx";
import {Col, Row} from "antd";
import BookNameCard from "../../shared/ui/BookNameCard/BookNameCard.tsx";
import {Button, InputWrapper} from "../../shared/ui";
import StatisticsChart from "../../shared/ui/StatisticsChart/StatisticsChart.tsx";
import {dayData, monthData, yearData} from "../../shared/ui/StatisticsChart/mocks.ts";
import Block from "../../shared/ui/Block/Block.tsx";
import {IOrder} from "../../entities/Order/model/types/OrderSchema.ts";

interface StatisticsWidgetProps {
    order: IOrder,
}


const StatisticsWidget: React.FC<StatisticsWidgetProps> = ({order}) => {
    return (
        <Block bgColor="var(--blocks-lil-color)" color="var(--alternate-color)" padding="20px" bdRadius="24px" margin="12px 0">
            <MyBookCard cover={order.publication.coverImage}>
                <Row gutter={[12, 24]}>
                    <Col lg={{span: 14}}>
                        <BookNameCard title={order.publication.title} authors={order.publication.authors} />
                    </Col>
                    <Col lg={{span: 10}}></Col>
                    <Col lg={{span: 4}}>
                        <InputWrapper label="Показы">
                            <p>1200</p>
                        </InputWrapper>
                    </Col>
                    <Col lg={{span: 4}}>
                        <InputWrapper label="Процент популярности:">
                            <p>20%</p>
                        </InputWrapper>
                    </Col>
                    <Col lg={{span: 4}}>
                        <InputWrapper label="Книгу купили:">
                            <p>200 раз</p>
                        </InputWrapper>
                    </Col>
                    <Col lg={{span: 4}}>
                        <InputWrapper label="Книга принесла вам:">
                            <p>600000 р</p>
                        </InputWrapper>
                    </Col>
                    <Col lg={{span: 6}}>
                        <Button type='accent'>Повысить статистику</Button>
                    </Col>
                </Row>
            </MyBookCard>
            <br/>
            <Row gutter={[24, 24]}>
                <Col xxl={{span: 16}}>
                    <StatisticsChart type="popularity" timeSpan="month" data={monthData} />
                </Col>
                <Col xxl={{span: 8}}>
                    <StatisticsChart type="show" timeSpan="day" data={dayData} />
                </Col>
                <Col xxl={{span: 16}}>
                    <StatisticsChart type="sales" timeSpan="year" data={yearData} />
                </Col>
            </Row>
        </Block>
    );
};

export default StatisticsWidget;