import {BrowserRouter, Route, Routes,  Navigate } from "react-router-dom";
import {GlobalStyle} from './styles/GlobalStyle'
import {FxAppContainer} from './Container'
import {
    Accounts,
    ChartContainer,
    Login,
    WebGLContainer,
    YouTubeContainer,
    YouTubePlayer,
    ComponentContainer,
    GoogleMapsContainer,
    CanvasContainer,
    Settings,
    External
} from './pages'
import Scatter from './pages/ChartContainer/ChartComponent/Scatter.component';
import LineChart from './pages/ChartContainer/ChartComponent/SimpleLine.component';
import Buttons from "./pages/ComponentContainer/Components/Buttons.component";
import CardsComponent from "./pages/ComponentContainer/Components/Cards.component";
import TextFields from "./pages/ComponentContainer/Components/TextFields.component";
import WebGlView from "./pages/WebGL/Components/WebGlView.component";
import WebGlDemo from "./pages/WebGL/Components/WebGlDemo.component";
import {ChartDemo} from "./pages/ChartContainer/ChartTests/ChartDemo";
import DateRangeComponent from "./pages/ComponentContainer/Components/DateRange.component";
import {GoogleMaps} from "./pages/GoogleMapsContainer/GoogleMapsComponent/GoogleMaps.component";
import GoogleMapsView from "./pages/GoogleMapsContainer/GoogleMapsComponent/GoogleMapslView.component";
import EventTest from "./pages/ComponentContainer/Components/EventTest.component";
import CanvasDiagram from "./pages/Canvas/Components/CanvasDiagram.component";
import CanvasClock1 from "./pages/Canvas/Components/CanvasClock.component";
import CanvasClock2 from "./pages/Canvas/Components/CanvasClock2.component";

export function App() {

    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path={`*`} element={<Navigate to="/home/components" replace />} />
                    <Route path={`/home`} element={<FxAppContainer />}>
                        <Route path={`/home/components`} element={<ComponentContainer />} >
                            <Route path={`/home/components`} element={<Buttons />} />
                            <Route path={`/home/components/button`} element={<Buttons />} />
                            <Route path={`/home/components/card`} element={<CardsComponent />} />
                            <Route path={`/home/components/textfield`} element={<TextFields />} />
                            <Route path={`/home/components/daterange`} element={<DateRangeComponent />} />
                            <Route path={`/home/components/eventtest`} element={<EventTest />} />
                        </Route>
                        <Route path={`/home/charts`} element={<ChartContainer />} >
                            <Route path={`/home/charts/scatter`} element={<Scatter />} />
                            <Route path={`/home/charts/line`} element={<LineChart />} />
                            <Route path={`/home/charts/demo`} element={<ChartDemo />} />
                        </Route>
                        <Route path={`/home/youtube/`} element={<YouTubeContainer />} >
                            <Route path={`/home/youtube/player`} element={<YouTubePlayer />} />
                        </Route>
                        <Route path={`/home/webgl/`} element={<WebGLContainer />} >
                            <Route path={`/home/webgl/webglview`} element={<WebGlView />} />
                            <Route path={`/home/webgl/webgldemo`} element={<WebGlDemo />} />
                        </Route>
                        <Route path={`/home/googlemaps/`} element={<GoogleMapsContainer />} >
                            <Route path={`/home/googlemaps/googlemapsview`} element={<GoogleMapsView />} />
                            <Route path={`/home/googlemaps/maps`} element={<GoogleMaps />} />
                        </Route>
                        <Route path={`/home/accounts`} element={<Accounts />} />
                        <Route path={`/home/canvas/`} element={<CanvasContainer />} >
                            <Route path={`/home/canvas/canvasclock1`} element={<CanvasClock1 />} />
                            <Route path={`/home/canvas/canvasclock2`} element={<CanvasClock2 />} />
                            <Route path={`/home/canvas/diagram`} element={<CanvasDiagram />} />
                        </Route>
                        <Route path={`/home/settings/`} element={<Settings />} />
                        <Route path={`/home/login/`} element={<Login />} />
                        <Route path={`/home/external/`} element={<External />} />
                        <Route path={`/home/external/:linkSrc`} element={<External />} />
                    </Route>
                    <Route path={`/login/`} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

