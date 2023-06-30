import React from 'react'
import styles from '../../common-styles/btn-nav.scss'
import {SettingIcon} from '../../../icons';

export const BtnSettings = () => (
    <button className={styles.item} type="button" data-target="settings">
        <div className={styles.contentWrap}>
            <div className={styles.icon}>
                <SettingIcon/>
            </div>
            <div className={styles.name}>Настройки</div>
        </div>
    </button>
)
