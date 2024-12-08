"use client"; 

import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Map.module.scss'

const MyMap = () => {
    const mapState = {
        center: [53.893979, 27.547030], 
        zoom: 16,
    };

    return (
        <YMaps>
            <div className='map_container' >
                <Map state={mapState} className='Map'>
                    <Placemark
                        geometry={[53.893979, 27.547030]} 
                        properties={{
                            balloonContent: 'БГУ',
                        }}
                    />
                </Map>
            </div>
        </YMaps>
    );
};

export default MyMap;
