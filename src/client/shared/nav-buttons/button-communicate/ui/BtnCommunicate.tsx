import React from "react";
import styles from "../../common-styles/btn-nav.scss"
import {CommunicateIcon} from '../../../icons';

export const BtnCommunicate = () => {
    return (
        <button className={styles.item} type="button" data-target="call">
            <div className={styles.contentWrap}>
                <div className={styles.icon}>
                    <CommunicateIcon />
                </div>
                <div className={styles.name}>Связаться</div>
            </div>
        </button>
    )

}