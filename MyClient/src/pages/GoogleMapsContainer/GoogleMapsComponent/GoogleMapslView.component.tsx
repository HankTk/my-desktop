import {FxContent} from '../../../styles/GlobalStyle'

export default function GoogleMapsView(props: any) {

    return (
        <FxContent style={{padding: '16px'}}>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.3190187507244!2d-122.00652936454729!3d37.33420793696967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2z44Ki44OD44OX44Or44O744OR44O844Kv!5e0!3m2!1sja!2sus!4v1694911801949!5m2!1sja!2sus"
                style={{width: '100%', height: '100%', border: 0}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

        </FxContent>
    )
}
