import React from 'react'
import {HideListButton} from "./buttons/hide-list-button/HideListButton"
import {ShowListButton} from "./buttons/show-list-button/ShowListButton"
import styles from './list.scss'

export const ListHead = () => (
    <li className={styles.head} id="list-box-head">
        <HideListButton />
        <div className={styles.text}>Пункты приема</div>
        <ShowListButton />
    </li>
)