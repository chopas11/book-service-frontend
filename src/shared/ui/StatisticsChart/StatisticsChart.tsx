import React, {useState} from 'react';
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, ResponsiveContainer,
} from 'recharts';
import s from "./StatisticsChart.module.css"
import {graphData} from "./mocks.ts"
import {Button} from "../index.ts";
import ArrowIcon from "../../assets/IconPack/ArrowIcon/ArrowIcon.tsx";
import TogglePopup from "../../../features/popups/togglePopup/TogglePopup.tsx";

interface StatisticsGraphProps {
    type: "popularity" | 'show' | 'sales',
    timeSpan?: "day" | "week" | "month" | "year",
    data: graphData[],


}

const StatisticsChart: React.FC<StatisticsGraphProps> = ({type, data = []}) => {


    const [range, setRange] = useState('day')

    return (
        <div className={s.statistics_graph}>
            <p>{
                type === "popularity" ? "График популярности:"  :
                type === "show" ? "График показов:" :
                "График покупок:"
            } &nbsp;
                <TogglePopup feature={<StatisticsRange callback={setRange} />}>
                    <Button size="xs" paddingX="10px"> {
                        range === "day" ? "За день"  :
                            range === "week" ? "За неделю" :
                                range === "month" ? "За месяц" :
                                    "За год"
                    } &nbsp; <ArrowIcon />
                    </Button>
                </TogglePopup>
            </p>

            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart
                width={450}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0.5" y1="0" x2="0.5" y2="1">
                        <stop offset="50%" stopColor="var(--accent-color)" stopOpacity={0.62}/>
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid horizontal={true} vertical={false} stroke="#8384c7"/>
                <XAxis axisLine={false} tickLine={false} dataKey="name" padding={{left: 10, right: 10}}/>
                <YAxis axisLine={false} tickLine={false}/>
                {/*<Tooltip/>*/}
                {/*<Legend/>*/}
                <Line type="monotone" dataKey="value" stroke="var(--accent-color)"/>
                <Area type="monotone" dataKey="value" stroke="var(--accent-color)" fill="url(#colorUv)"/>
            </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatisticsChart;


interface StatisticsRangeProps {
    // range: string
    callback: React.EventHandler<never>,
}

const StatisticsRange:React.FC<StatisticsRangeProps> = ({callback}) => {
    return (
        <div className={s.range}>
            <ul>
                <li onClick={() => callback('day')}>За день</li>
                <li onClick={() => callback('week')}>За неделю</li>
                <li onClick={() => callback('month')}>За месяц</li>
                <li onClick={() => callback('year')}>За год</li>
            </ul>
        </div>
    )
}