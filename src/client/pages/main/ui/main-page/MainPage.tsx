import React from 'react';
import {Nav} from "../../../../widgets";
import {FormDelivery} from "../../../../entities";
import styles from './main-page.scss'
import {RecyclingCentersList} from '../../../../entities/recycling-centers-list';

export const MainPage = () => (
    <div className={styles.container}>
        <Nav />
        <RecyclingCentersList />
        <FormDelivery />
        <div className="map-wrap">
            <button className="btn-remove-route" id="btn-remove-route" type="button">
                <span className="btn-remove-route__icon">&#10006;</span>
                <span className="btn-remove-route__text">Удалить маршрут</span>
            </button>
            <div className="map-delivery" id="mapDelivery"></div>
        </div>
    </div>
)