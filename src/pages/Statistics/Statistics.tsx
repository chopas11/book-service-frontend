import React from 'react';
import StatisticsChart from "../../shared/ui/StatisticsChart/StatisticsChart.tsx";
import Block from "../../shared/ui/Block/Block.tsx";
import {dayData, monthData, yearData} from "../../shared/ui/StatisticsChart/mocks.ts";
import {Col, Row} from "antd";
import MyBookCard from "../../shared/ui/MyBookCard/MyBookCard.tsx";
import s from "../../widgets/MyBookWidget/MyBookWidget.module.css";
import {Button} from "../../shared/ui";


const Statistics: React.FC = () => {

    return (
        <>
            <h2 className="header_center">Статистика</h2>
            <Block bgColor="var(--lil-color)" color="var(--text-color)" padding="20px" bdRadius="24px">
                <MyBookCard>
                    <Row>
                        <Col lg={{span: 14}}>
                            <div className={s.myBook_about}>
                                <div className={s.myBook_about_title}>
                                    <h3>Название</h3>
                                    <p>Автор</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{span: 4}}>
                            <div className={s.myBooks_about_description}>
                                <span>Показы:</span>
                                <p>1200</p>
                            </div>
                        </Col>
                        <Col lg={{span: 4}}>
                            <div className={s.myBooks_about_description}>
                                <span>Процент популярности:</span>
                                <p>20%</p>
                            </div>
                        </Col>
                        <Col lg={{span: 4}}>
                            <div className={s.myBooks_about_description}>
                                <span>Книгу купили:</span>
                                <p>200 раз</p>
                            </div>
                        </Col>
                        <Col lg={{span: 4}}>
                            <div className={s.myBooks_about_description}>
                                <span>Книга принесла вам:</span>
                                <p>600000 р</p>
                            </div>
                        </Col>
                        <Col lg={{span: 6}}>
                            <Button>Повысить статистику</Button>
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
        </>
    );
};

export default Statistics;