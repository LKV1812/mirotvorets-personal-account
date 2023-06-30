import React from 'react'
import styles from './map-yandex.scss'
import {YMaps, Map} from '@pbe/react-yandex-maps';
import {CoordsType, ZoomType} from '../model/types';

interface IMapYandex {
    center: CoordsType
    zoom: ZoomType
}
export const MapYandex = ({center, zoom}: IMapYandex) => (
    <YMaps>
        <Map defaultState={{ center: center, zoom: zoom }} className={styles.map}/>
    </YMaps>
)