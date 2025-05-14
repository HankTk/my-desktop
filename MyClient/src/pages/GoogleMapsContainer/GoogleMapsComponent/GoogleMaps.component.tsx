import {useState} from "react"
import {useLocation} from "react-router-dom";
import {FxContainer, FxContent} from '../../../styles/GlobalStyle'

import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

export function GoogleMaps(props: any) {

    const GOOGLE_API_MAP_KEY = process.env.REACT_APP_GOOGLE_API_MAP_KEY;

    if (!GOOGLE_API_MAP_KEY) {
        console.error("Google Maps API key is not defined. Please check your .env file.");
        return <p>Error: Google Maps API key is missing.</p>; // Or some other fallback UI
    }

    const divStyle = {
        background: "white",
        fontSize: 7.5,
    };

    const location = useLocation();

    console.log(location.search);

    /*
    const strSearch = location.search.replace('?', '');
    */

    const defaultLatLng={
        lat:35.658584,
        lng:139.745433
    }

    const containerStyle={
        width: "100%",
        height: "100%"
    };

    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker: any) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };


    const [marker, setMarker] = useState(null);

    function handleMapClick(event: any) {
        // @ts-ignore
        setMarker({lat: event.latLng.lat(), lng: event.latLng.lng()})
        handleActiveMarker(event);
    }

    const markers=[
        {
            id:1,
            latitude: 35.40205123100059,
            longitude: 132.68554179607017,
            shelter:'出雲大社'
        },
        {
            id: 2,
            latitude: 35.476688415153504,
            longitude: 133.05132395465827,
            shelter: '松江城'
        },
        {
            id: 3,
            latitude: 35.416450037264745,
            longitude: 133.01041272772449,
            shelter: '玉造温泉'
        },
        {
            id: 4,
            latitude: 34.84094249399677,
            longitude: 134.69429771989164,
            shelter: '姫路城'
        }
    ];

    return (
        <FxContainer>

            <FxContent>

                <LoadScript googleMapsApiKey={GOOGLE_API_MAP_KEY}>

                    <GoogleMap
                        center={defaultLatLng}
                        zoom={15}
                        mapContainerStyle={containerStyle}
                        onClick={handleMapClick}>

                        {marker && (
                            <Marker position={marker}/>
                        )}

                        {markers.map(marker => {

                            return (
                                <Marker
                                    key={marker.id}
                                    position={{ lat: marker.latitude, lng: marker.longitude }}>

                                    <InfoWindow
                                        position={{lat: marker.latitude, lng: marker.longitude}}
                                        onCloseClick={() => setActiveMarker(null)}>
                                        <div style={divStyle}>
                                            {marker.shelter}
                                        </div>
                                    </InfoWindow>

                                </Marker>
                            )
                        })}

                    </GoogleMap>

                </LoadScript>

            </FxContent>

        </FxContainer>
    )

}
