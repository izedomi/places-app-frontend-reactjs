import React, {useRef, useEffect} from 'react';

import './Map.css';



const Map = (props) => {

    const mapRef = useRef();
    const {center, zoom} = props;

    useEffect(() => {
        
        setTimeout(() => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: center,
                zoom: zoom,
            });
        
            // The marker, positioned at Uluru
            new window.google.maps.Marker({
                position:  center ,
                map: map,
            });
        }, 500)
        
    }, [center, zoom]);
    
    return <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
}


export default Map;