import React, {ChangeEvent, useState} from 'react';
import {Calendar} from "./calendar";
import styles from './oreder-at-date.scss'
import stylesCommon from '../../common-styles/order-inputs.scss'
import {CalendarIcon} from "./calendar-icon/CalendarIcon";
import {ClockIcon} from '../../../../../shared';

export const OrderAtDate = () => {
    const [valueDateOrder, setValueDateOrder] = useState('дд.мм.гггг')
    const [valueHoursFrom, setValueHoursFrom] = useState('')
    const [valueMinutesFrom, setValueMinutesFrom] = useState('')
    const [valueHoursTo, setValueHoursTo] = useState('')
    const [valueMinutesTo, setValueMinutesTo] = useState('')
    const handleChangeDateOrder = (e: ChangeEvent<HTMLInputElement>) => {
        setValueDateOrder(e.currentTarget.value)
    }
    const handleChangeHoursFrom = (e: ChangeEvent<HTMLInputElement>) => {
        setValueHoursFrom(e.currentTarget.value)
    }
    const handleChangeMinutesFrom = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMinutesFrom(e.currentTarget.value)
    }
    const handleChangeHoursTo = (e: ChangeEvent<HTMLInputElement>) => {
        setValueHoursTo(e.currentTarget.value)
    }
    const handleChangeMinutesTo = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMinutesTo(e.currentTarget.value)
    }

    return (
        <div className={`${stylesCommon.inputWrap} ${stylesCommon.borderBottom}`}>
            <div className={`${styles.notification} ${styles.warning}`}></div>
            <label className={`${stylesCommon.label} ${styles.top2}`}
                   data-calendar-icon="data-calendar-icon" tabIndex={0}>
                <CalendarIcon/>
            </label>
            <div className={styles.wrap}>
                <input
                    onChange={handleChangeDateOrder}
                    className={`${stylesCommon.field} ${styles.input}`}
                    id="inputDate" type="text"
                    spellCheck="false" name="date" data-date="data-date"
                    value={valueDateOrder}
                    autoComplete="off"
                />
                <div className={styles.icon}>
                    <ClockIcon/>
                </div>
                <span>c</span>
                <input
                    onChange={handleChangeHoursFrom}
                    className={`${stylesCommon.field} ${styles.time}`}
                    type="text"
                    spellCheck="false" name="date" data-field-hours="from"
                    data-date="data-date"
                    placeholder="08" autoComplete="off"
                    value={valueHoursFrom}
                />
                <span>:</span>
                <input
                    onChange={handleChangeMinutesFrom}
                    className={`${stylesCommon.field} ${styles.time}`}
                    type="text"
                    spellCheck="false" name="date" data-field-minutes="from"
                    data-date="data-date"
                    placeholder="00" autoComplete="off"
                    value={valueMinutesFrom}
                />
                <span>до</span>
                <input
                    onChange={handleChangeHoursTo}
                    className={`${stylesCommon.field} ${styles.time}`} type="text"
                    spellCheck="false" name="date" data-field-hours="to" data-date="data-date"
                    placeholder="18" autoComplete="off"
                    value={valueHoursTo}
                />
                <span>:</span>
                <input
                    onChange={handleChangeMinutesTo}
                    className={`${stylesCommon.field} ${styles.time}`} type="text"
                    spellCheck="false" name="date" data-field-minutes="to" data-date="data-date"
                    placeholder="00" autoComplete="off"
                    value={valueMinutesTo}
                />
            </div>
            <Calendar/>
        </div>
    )
}
