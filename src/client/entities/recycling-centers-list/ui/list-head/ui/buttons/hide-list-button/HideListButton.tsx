import React from 'react'
import styles from './hide-recycling-list.scss'

export const HideListButton = () => (
    <button className={styles.button} data-btn='recycling-centers-hide' id="btn-hide-houses" type="button">
        <svg
            viewBox="0 0 15.699 8.707"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.699 3.854L1.914 3.854 5.061 0.707 4.354 0 0 4.354 4.354 8.707 5.061 8 1.914 4.854 15.699 4.854z"/>
        </svg>
    </button>
)