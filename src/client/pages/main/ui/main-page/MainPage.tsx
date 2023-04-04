import React from 'react'
import {Nav} from '../../../../widgets'
import {FormDelivery, MapYandex} from '../../../../entities'
import styles from './main-page.scss'
import {RecyclingCentersList} from '../../../../entities/recycling-centers-list'
import {RemoveRouteBtn} from '../../../../shared'

export const MainPage = () => (
    <div className={styles.container}>
        <Nav />
        <RecyclingCentersList />
        <FormDelivery />
        <div className={styles.mapWrap}>
            <RemoveRouteBtn />
            <MapYandex />
        </div>
    </div>
)