import React, {ChangeEvent, useState} from 'react'
import styles from '../../common-styles/order-inputs.scss'
import {PhoneIcon} from "./icons/PhoneIcon";

export const InputPhone = () => {
    const [value, setValue] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className={styles.inputWrap}>
            <label className={styles.label}
                   htmlFor="inputPhone">
                <PhoneIcon />
            </label>
            <input className={`${styles.field} tel-field`}
                   onChange={handleChange}
                   id="inputPhone"
                   type="tel"
                   name="phone"
                   data-required="required|phone"
                   data-for="contacts"
                   placeholder="Ваш телефон"
                   value={value}
            />
        </div>
    )
}