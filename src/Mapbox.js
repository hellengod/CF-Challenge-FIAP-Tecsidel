import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import CustomMarker from '.components/CustomMarker';
import MonitoramentoModal from '.components/MonitoramentoModal';
import RelatoriosModal from '.components/RelatoriosModal';
import MapaModal from '.components/MapaModal';
import '.components/CustomMarker.css';

function Mapbox() {
    const [viewport, setViewport] = useState({
        longitude: -46.6356,
        latitude: -23.6606,
        zoom: 10,
    });

    const [monitoramentoOpen, setMonitoramentoOpen] = useState(false);
    const [relatoriosOpen, setRelatoriosOpen] = useState(false);
    const [mapaOpen, setMapaOpen] = useState(false);

    const openMonitoramentoModal = () => setMonitoramentoOpen(true);
    const openRelatoriosModal = () => setRelatoriosOpen(true);
    const openMapaModal = () => setMapaOpen(true);

    const markers = [
        {
            id: 1,
            latitude: -23.510277,
            longitude: -46.817104,
            km: '374',
            description: 'Castello Branco',
            status: 'Falha em equipamento',
            imgstatus: '/Images/statusred.png'
        },
        {
            id: 2,
            latitude: -23.787539,
            longitude: -46.913621,
            km: '298',
            description: 'Regis Bittencourt',
            status: 'Regular',
            imgstatus: '/Images/status.png',
        },
        {
            id: 3,
            latitude: -23.322463,
            longitude: -46.581130,
            km: '65',
            description: 'Fernão Dias',
            status: 'Atenção incidente',
            imgstatus: '/Images/statusorange.png',
        }


    ]


    return (
        <div>
            <Map
                {...viewport}
                onMove={(evt) => setViewport(evt.viewState)}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle="mapbox://styles/vnaves/clwh57ii802vx01qg438k6mm6"
                mapboxAccessToken="pk.eyJ1Ijoidm5hdmVzIiwiYSI6ImNsd2YzMG1lajFxOTYycWw5ZGdyaDQ4OWoifQ.YI-e24KueFFbmE5ZHqRZ1Q"
            >

                {markers.map(marker => (
                    <Marker
                        key={marker.id}
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                    >
                        <CustomMarker
                            imgstatus={marker.imgstatus}
                            km={marker.km}
                            description={marker.description}
                            status={marker.status}
                            openMonitoramentoModal={openMonitoramentoModal}
                            openRelatoriosModal={openRelatoriosModal}
                            openMapaModal={openMapaModal}
                        />
                    </Marker>
                ))}
            </Map>

            {monitoramentoOpen && <MonitoramentoModal onClose={() => setMonitoramentoOpen(false)} />}
            {relatoriosOpen && <RelatoriosModal onClose={() => setRelatoriosOpen(false)} />}
            {mapaOpen && <MapaModal onClose={() => setMapaOpen(false)} />}
        </div>
    );
}

export default Mapbox;
