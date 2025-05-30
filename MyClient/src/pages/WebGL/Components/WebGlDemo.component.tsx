import {FxContent} from '../../../styles/GlobalStyle'
import {useLocation} from "react-router-dom";

export default function WebGlDemo(props: any) {

    const location = useLocation();

    console.log(location.search);

    // const strSearch = location.search.replace('?', '');

    const strUrl = `http://localhost:5173`;

    return (
        <FxContent style={{padding: '16px'}}>
            <iframe
                src={strUrl}
                style={{width: '100%', height: '100%', border: 0}}>
            </iframe>
        </FxContent>
    )
}
