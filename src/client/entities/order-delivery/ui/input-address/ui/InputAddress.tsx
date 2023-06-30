import React, {ChangeEvent, useState} from 'react';
import {PlacemarkIcon} from "./icons/PlacemarkIcon";
import styles from '../../common-styles/order-inputs.scss'

export const InputAddress = () => {
    const [value, setValue] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className={styles.inputWrap}>
            <label className={styles.label}
                   htmlFor="inputAddress">
                <PlacemarkIcon />
            </label>
            <input className={styles.field}
                   onChange={handleChange}
                   id="inputAddress"
                   type="text"
                   name="address" data-required="required|minLength(5)"
                   data-for="contacts"
                   placeholder="Ваш адрес"
                   value={value}
            />
        </div>
    )
}