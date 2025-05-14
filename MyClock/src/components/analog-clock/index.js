import React, { useEffect, useState } from "react";
import { Clock, Hour, Minute, Second } from "./styled";

function AnalogClock() {

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
    <Clock>
      <Hour hour={hour} />
      <Minute min={minute} />
      <Second sec={second} />
    </Clock>
  );

}

export default AnalogClock;
