import {FxContent, FxFullContainer} from '../../styles/GlobalStyle'
import {useParams} from 'react-router-dom'

export function External() {

    const {linkSrc} = useParams();

    const externalLink = {
        'tetris': {url: 'http://localhost:8080', title: 'Tetris'}
    };
    // @ts-ignore
    const linkObject = externalLink[linkSrc];

    return (
        <FxFullContainer>
            <FxContent>
                <iframe
                    src={linkObject.url}
                    style={{width: '100%', height: '100%', border: 0}}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </FxContent>
        </FxFullContainer>
    )

}

