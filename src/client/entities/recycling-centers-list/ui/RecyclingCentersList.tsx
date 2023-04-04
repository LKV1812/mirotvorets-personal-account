import React from 'react'
import {ListHead} from './list-head'
import {ListItem} from './list-item/ui/ListItem'
import styles from './recycling-centers.scss'

export const RecyclingCentersList = () => (
    <ul className={styles.dropdownList} tabIndex={0}>
        <ListHead />
        <ListItem title={'Тимирязева'}/>
        <ListItem title={'Ямская'}/>
        <ListItem title={'Чекистов'}/>
    </ul>
)