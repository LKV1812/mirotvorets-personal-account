import React from 'react';
import {Calendar} from "./calendar";
import styles from './oreder-at-date.scss'
import stylesCommon from '../../common-styles/order-inputs.scss'
import {CalendarIcon} from "./calendar-icon/CalendarIcon";

export const OrderAtDate = () => (
    <div className={`${stylesCommon.inputWrap} ${stylesCommon.borderBottom}`}>
        <div className={`${styles.notification} ${styles.warning}`}></div>
        <label className={`${stylesCommon.label} ${styles.top2}`}
               data-calendar-icon="data-calendar-icon" tabIndex={0}>
            <CalendarIcon />
        </label>
        <div className={styles.wrap}>
            <input
                className={`${stylesCommon.field} ${styles.input}`} id="inputDate" type="text"
                spellCheck="false" name="date" data-date="data-date"
                value="дд.мм.гггг"
                autoComplete="off"
            />
            <div className={styles.icon}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.5" cy="5.5" r="5.15" stroke="#67AF01"
                            stroke-width="0.7"/>
                    <path
                        d="M7.95993 5.90931C7.95993 5.84652 7.9342 5.78629 7.88838
                        5.74189C7.84257 5.69749 7.78044 5.67254 7.71565
                        5.67254H5.51713V2.43677C5.51713 2.37397 5.49139 2.31375
                        5.44558 2.26935C5.39977 2.22495 5.33763 2.2 5.27285 2.2C5.20806
                        2.2 5.14592 2.22495 5.10011 2.26935C5.0543 2.31375 5.02856 2.37397
                        5.02856 2.43677V5.90931C5.02856 5.9721 5.0543 6.03232 5.10011
                        6.07673C5.14592 6.12113 5.20806 6.14607 5.27285
                        6.14607H7.71565C7.78044 6.14607 7.84257 6.12113 7.88838
                        6.07673C7.9342 6.03232 7.95993 5.9721 7.95993 5.90931Z"
                        fill="#67AF01"/>
                </svg>
            </div>
            <span>c</span>
            <input
                className={`${stylesCommon.field} ${styles.time}`}
                type="text"
                spellCheck="false" name="date" data-field-hours="from"
                data-date="data-date"
                placeholder="08" autoComplete="off"/>
            <span>:</span>
            <input
                className={`${stylesCommon.field} ${styles.time}`}
                type="text"
                spellCheck="false" name="date" data-field-minutes="from"
                data-date="data-date"
                placeholder="00" autoComplete="off"/>
            <span>до</span>
            <input
                className={`${stylesCommon.field} ${styles.time}`} type="text"
                spellCheck="false" name="date" data-field-hours="to" data-date="data-date"
                placeholder="18" autoComplete="off"/>
            <span>:</span>
            <input
                className={`${stylesCommon.field} ${styles.time}`} type="text"
                spellCheck="false" name="date" data-field-minutes="to" data-date="data-date"
                placeholder="00" autoComplete="off"/>
        </div>
        <Calendar/>
    </div>
)