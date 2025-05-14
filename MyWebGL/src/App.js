import {BrowserRouter, Route, Routes,  Navigate } from "react-router-dom";

import Basic from './example/Basic/BasicView';
import CarView from './example/Car/CarView';
import Color from './example/Color/Color';
import Room from './example/Room/Room';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={`/basic`} element={<Basic />} />
            <Route path={`/car`} element={<CarView />} />
            <Route path={`/color`} element={<Color />} />
            <Route path={`/room`} element={<Room />} />
        </Routes>
      </BrowserRouter>
  )
}
