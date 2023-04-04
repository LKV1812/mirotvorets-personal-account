import React from 'react'
import {Nav} from '../../../../widgets'
import {FormDelivery, RecyclingCentersList, MapYandex, PrivacyPolicy} from '../../../../entities'
import {RemoveRouteBtn} from '../../../../shared'
import styles from './main-page.scss'

export const MainPage = () => (
    <div className={styles.container}>
        <Nav />
        <RecyclingCentersList />
        <FormDelivery />
        <div className={styles.mapWrap}>
            <RemoveRouteBtn />
            <MapYandex />
            <PrivacyPolicy />
        </div>
    </div>
)