import styled from "styled-components";

export const ClockContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  /*
  min-height: 100vh;
  */
  background: #2c3e50;

`

export const Clock = styled.div`
  position: relative;
  background: url("/clock.png");
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  border: 4px solid #2c3e50;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 2555, 0.05),
  inset 0 -15px 15px rgba(255, 255, 2555, 0.05),
  0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    z-index: 999;
  }
`;

export const Hour = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  z-index: 10;
  transform: rotateZ(${(p) => p.hour}deg);

  &::before {
    content: "";
    width: 8px;
    height: 80px;
    background: #2980b9;
    position: absolute;
    border-radius: 20px;
  }
`;

export const Minute = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  z-index: 11;
  transform: rotateZ(${(p) => p.min}deg);

  &::before {
    content: "";
    width: 5px;
    height: 90px;
    background: #ecf0f1;
    position: absolute;
    border-radius: 20px;
  }
`;

export const Second = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  transform: rotateZ(${(p) => p.sec}deg);
  z-index: 12;

  &::before {
    content: "";
    width: 3px;
    height: 110px;
    background: #e67e22;
    position: absolute;
    border-radius: 20px;
  }
`;
