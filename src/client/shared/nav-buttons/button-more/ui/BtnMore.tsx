import React from 'react';
import styles from '../../common-styles/btn-nav.scss'
import {BurgerIcon} from '../../../icons';

export const BtnMore = () => {
    return (
        <button className={styles.item} type="button" data-target="more">
            <div className={styles.contentWrap}>
                <div className={styles.icon}>
                    <BurgerIcon/>
                </div>
                <div className={styles.name}>Ещё</div>
            </div>
        </button>
    )
}