import React from 'react';
import mapMarker from '../images/map-marker.svg';

import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import 'leaflet/dist/leaflet.css'
import '../styles/pages/OrfanatosMap.css';

function OrfanatosMap() {
    return (

        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Igrejinha</strong>
                    <span>Rio Grande Do Sul</span>
                </footer>
            </aside>

            <Map
                center={[-29.5664866, -50.7936309]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="criar-orfanato"><FiPlus size={32} color="#FFF"></FiPlus></Link>
        </div>

    );
}

export default OrfanatosMap;