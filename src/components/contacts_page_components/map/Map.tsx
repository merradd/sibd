"use client"; 

import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Map.module.scss'

const MyMap = () => {
    const mapState = {
        center: [53.893567, 27.545599], 
        zoom: 17,
    };

    return (
        <YMaps>
            <div className='map_container' >
                <Map state={mapState} className='Map' modules={['geoObject.addon.balloon']}>
                    <Placemark
                        geometry={[53.893567, 27.545599]} 
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
