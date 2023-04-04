import React from 'react'
import styles from './remove-route.scss'

export const RemoveRouteBtn = () => (
    <button className={styles.button} id="btn-remove-route" type="button">
        <span className={styles.icon}>&#10006;</span>
        <span className={styles.text}>Удалить маршрут</span>
    </button>
)