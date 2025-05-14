import { useLocation } from "react-router-dom";

import {FxContainer, FxContent} from '../../../styles/GlobalStyle'

// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'

export function YouTubePlayer(props: any) {

    const location = useLocation();

    console.log(location.search);

    const strSearch = location.search.replace('?', '');

    const strUrl = `https://www.youtube.com/watch?v=${strSearch}`;

    return (
        <FxContainer>

            <FxContent>

                <ReactPlayer
                    url={strUrl}
                    height={'100%'}
                    width={'100%'} controls={true}  />

            </FxContent>

        </FxContainer>
    )

}

