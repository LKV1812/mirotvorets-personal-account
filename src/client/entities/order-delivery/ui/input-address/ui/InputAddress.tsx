import React from 'react';
import {PlacemarkIcon} from "./icons/PlacemarkIcon";
import styles from '../../common-styles/order-inputs.scss'

export const InputAddress = () => {
    return (
        <div className={styles.inputWrap}>
            <label className={styles.label}
                   htmlFor="inputAddress">
                <PlacemarkIcon />
            </label>
            <input className={styles.field} id="inputAddress"
                   type="text"
                   name="address" data-required="required|minLength(5)"
                   data-for="contacts"
                   placeholder="Ваш адрес"/>
        </div>
    )
}