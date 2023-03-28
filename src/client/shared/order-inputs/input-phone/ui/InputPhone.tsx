import React from 'react'
import styles from '../../common-styles/input-order.scss'

export const InputPhone = () => {
    return (
        <div className={styles.inputWrap}>
            <label className={styles.label}
                   htmlFor="inputPhone">
            </label>
            <input className={`${styles.field} tel-field`} id="inputPhone"
                   type="tel"
                   name="phone" data-required="required|phone" data-for="contacts"
                   placeholder="Ваш телефон"/>
        </div>
    )
}