import React from 'react'
import styles from '../../common-styles/btn-nav.scss'
import {ListIcon} from '../../../icons';

export const BtnHistory = () => {
    return (
        <button className={styles.item} type="button" data-target="orders">
            <div className={styles.contentWrap}>
                <div className={styles.icon}>
                    <ListIcon />
                </div>
                <div className={styles.name}>Заявки</div>
            </div>
        </button>
    )
}