import React from 'react'
import {Nav} from '../../../../widgets'
import {FormDelivery, RecyclingCentersList, MapYandex, PrivacyPolicy} from '../../../../entities'
import {RemoveRouteBtn} from '../../../../shared'
import styles from './main-page.scss'

export const MainPage = () => (
    <div className={styles.container}>
        <RecyclingCentersList />
        <FormDelivery />
        <div className={styles.mapWrap}>
            <RemoveRouteBtn />
            <MapYandex center={[57.129626, 65.536304]} zoom={16}/>
            <PrivacyPolicy />
        </div>
    </div>
)