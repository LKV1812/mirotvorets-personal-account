import React from 'react';
import styles from '../../common-styles/input-order.scss'

export const InputAddress = () => {
    return (
        <div className={styles.inputWrap}>
            <label className={styles.label}
                   htmlFor="inputAddress">
            </label>
            <input className={styles.field} id="inputAddress"
                   type="text"
                   name="address" data-required="required|minLength(5)"
                   data-for="contacts"
                   placeholder="Ваш адрес"/>
        </div>
    )
}