import React, {ChangeEvent, useState} from 'react'
import styles from './calendar.scss'

export const Calendar = () => {
    const [valueHoursFrom, setValueHoursFrom] = useState('')
    const [valueMinutesFrom, setValueMinutesFrom] = useState('')
    const [valueHoursTo, setValueHoursTo] = useState('')
    const [valueMinutesTo, setValueMinutesTo] = useState('')
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


    return(
        <div className={styles.container} id="calendar">
            <div className={styles.btnCloseWrap}>
                <button className={styles.btnClose} type="button"></button>
            </div>
            <div className={styles.notification}>
                <div className={styles.notificationText}></div>
                <button className={styles.notificationBtnClose} type="button">OK</button>
            </div>
            <div className={styles.selectDate} data-select-date="data-select-date">
                <button className={styles.prevSelectDate} type="button"
                        data-select-date-prev="data-select-date-prev">
                </button>
                <div className={styles.outputSelectedDate}
                     data-output-selected-date="data-output-selected-date" tabIndex={0}>Январь
                </div>
                <button className={styles.nextSelectDate} type="button"
                        data-select-date-next="data-select-date-next">
                </button>
            </div>
            <div data-table-calendar-wrap="data-table-calendar-wrap">
                <table>
                    <thead>
                    <tr>
                        <th className={styles.tableHeadCell}>Пн</th>
                        <th className={styles.tableHeadCell}>Вт</th>
                        <th className={styles.tableHeadCell}>Ср</th>
                        <th className={styles.tableHeadCell}>Чт</th>
                        <th className={styles.tableHeadCell}>Пт</th>
                        <th className={styles.tableHeadCell}>Сб</th>
                        <th className={styles.tableHeadCell}>Вс</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>1
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>2
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>3
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>4
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>5
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>6
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>7
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>8
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>9
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>10
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>11
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>12
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>13
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>14
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>15
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>16
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>17
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>18
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>19
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>20
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>21
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>22
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>23
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>24
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>25
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>26
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>27
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>28
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>29
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>30
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>31
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>1
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>2
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>3
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>4
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>5
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>6
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>7
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>8
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>9
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>10
                            </td>
                            <td className={styles.tableCell} data-date-cell="data-date-cell"
                                tabIndex={0}>11
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.selectTime}>
                <span>Время c</span>
                <div className={styles.inputTimeWrap}>
                    <input
                        className={styles.selectTimeInput}
                        onChange={handleChangeHoursFrom}
                        type="number"
                        name="time_from"
                        maxLength={2}
                        data-working-hours={8-20}
                        data-notification-calendar="{&quot;text&quot;:&quot;Вы выбрали нерабочие
                                                часы! Мы работаем с 08:00 до 20:00. Заявка может быть перенесена на
                                                другое время&quot;,
                                                &quot;className&quot;:&quot;calendar-notification-warning&quot;}"
                        data-hours="from"
                        placeholder="08"
                        value={valueHoursFrom}
                    />
                    <span>:</span>
                    <input
                        className={styles.selectTimeInput}
                        onChange={handleChangeMinutesFrom}
                        type="number"
                        name="time_from"
                        data-minutes="from"
                        placeholder="00"
                        value={valueMinutesFrom}
                    />
                </div>
                <span>до</span>
                <div className={styles.inputTimeWrap}>
                    <input
                        className={styles.selectTimeInput}
                        onChange={handleChangeHoursTo}
                        type="number"
                        name="time_to"
                        data-working-hours="8-20"
                        data-notification-calendar="{&quot;text&quot;:&quot;Вы выбрали нерабочие часы! Мы работаем с 08:00 до 20:00. Заявка может быть перенесена на другое время&quot;, &quot;className&quot;:&quot;calendar-notification-warning&quot;}"
                        data-hours="to" placeholder="18"
                        value={valueHoursTo}
                    />
                    <span>:</span>
                    <input
                        onChange={handleChangeMinutesTo}
                        className={styles.selectTimeInput}
                        type="number"
                        name="time_to"
                        data-minutes="to"
                        placeholder="00"
                        value={valueMinutesTo}
                    />
                </div>
            </div>
            <div className={styles.inputSaveWrap}>
                <button className={styles.btnSaveDate} type="button">
                    готово
                </button>
            </div>
        </div>
    )
}