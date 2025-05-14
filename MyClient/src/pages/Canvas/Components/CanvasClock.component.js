import { useEffect, useState } from "react";
import {Clock, ClockContainer, Hour, Minute, Second} from "./CanvasClock.styles";
import {FxContent} from '../../../styles/GlobalStyle'

export default function CanvasClock() {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const day = new Date();

            const hr = day.getHours() * 30;
            const mn = day.getMinutes() * 6;
            const sc = day.getSeconds() * 6;

            setHour(hr + mn / 12);
            setMinute(mn);
            setSecond(sc);
        });
    }, []);

    return (
        <FxContent style={{padding: '16px'}}>
            <ClockContainer>
                <Clock>
                    <Hour hour={hour} />
                    <Minute min={minute} />
                    <Second sec={second} />
                </Clock>
            </ClockContainer>
        </FxContent>
    );

}
