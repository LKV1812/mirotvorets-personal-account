import React from 'react'
import styles from './order-delivery.scss'
import {InputAddress, InputPhone, TextareaCustom} from "../../../shared";

export const FormDelivery = () => {
    return (
        <form className={styles.form} id="orderDelivery" data-states-item-submenu="close"
              data-for="form-order-account" data-action="/forms/orderDeliveryFromAccount">
            <input type="hidden" name="form_type" value="order_delivery_user_account_form"
                   data-for="header-form"/>
            <input type="hidden" name="form_title" value="Заявка из личного кабинета"
                   data-for="header-form"/>
            <input type="hidden" name="admin_email" value="zayavka@mirotvorets72.com"
                   data-for="header-form"/>
            <input type="hidden" name="captcha_token" data-captcha="captcha"
                   data-for="header-form"/>
            <div className={styles.contentWrapper}>
                <InputAddress />
                <div id="suggest-view-container"></div>
                <div className="scroll-horizontal-invisible" id="saved-addresses"></div>
                <InputPhone />
                <div className="scroll-horizontal-invisible" id="saved-phones"></div>
                <TextareaCustom />
                <div className="order-delivery__input-wrap order-delivery__input-wrap--border-bottom">
                    <div className="order-delivery__date-notification order-delivery__date-notification--warning">
                    </div>
                    <label className="input order-delivery__label-input"
                           data-calendar-icon="data-calendar-icon" tabIndex={0}>
                    </label>
                    <div className="flex-wrap-for-date-and-time"><input
                        className="input order-delivery__input" id="inputDate" type="text"
                        spellCheck="false" name="date" data-date="data-date"
                        value="дд.мм.гггг"
                        autoComplete="off"/>
                        <div className="order-delivery__icon-clock">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5.5" cy="5.5" r="5.15" stroke="#67AF01"
                                        stroke-width="0.7"/>
                                <path
                                    d="M7.95993 5.90931C7.95993 5.84652 7.9342 5.78629
                                                7.88838 5.74189C7.84257 5.69749 7.78044 5.67254 7.71565
                                                5.67254H5.51713V2.43677C5.51713 2.37397 5.49139
                                                2.31375 5.44558 2.26935C5.39977 2.22495 5.33763
                                                2.2 5.27285 2.2C5.20806 2.2 5.14592 2.22495 5.10011
                                                2.26935C5.0543 2.31375 5.02856 2.37397 5.02856
                                                2.43677V5.90931C5.02856 5.9721 5.0543 6.03232 5.10011
                                                6.07673C5.14592 6.12113 5.20806 6.14607 5.27285
                                                6.14607H7.71565C7.78044 6.14607 7.84257 6.12113
                                                7.88838 6.07673C7.9342 6.03232 7.95993 5.9721 7.95993
                                                5.90931Z"
                                    fill="#67AF01"/>
                            </svg>
                        </div>
                        <span>c</span>
                        <input
                            className="input order-delivery__input order-delivery__input--time"
                            type="text"
                            spellCheck="false" name="date" data-field-hours="from"
                            data-date="data-date"
                            placeholder="08" autoComplete="off"/>
                        <span>:</span>
                        <input
                            className="input order-delivery__input order-delivery__input--time"
                            type="text"
                            spellCheck="false" name="date" data-field-minutes="from"
                            data-date="data-date"
                            placeholder="00" autoComplete="off"/>
                        <span>до</span>
                        <input
                            className="input order-delivery__input order-delivery__input--time" type="text"
                            spellCheck="false" name="date" data-field-hours="to" data-date="data-date"
                            placeholder="18" autoComplete="off"/>
                        <span>:</span>
                        <input
                            className="input order-delivery__input order-delivery__input--time" type="text"
                            spellCheck="false" name="date" data-field-minutes="to" data-date="data-date"
                            placeholder="00" autoComplete="off"/>
                    </div>
                    <div className="calendar" id="calendar">
                        <div className="calendar__btn-close-wrap">
                            <button className="modal-close calendar__btn-close" type="button"></button>
                        </div>
                        <div className="calendar-notification">
                            <div className="calendar-notification__text"></div>
                            <button className="calendar-notification__btn-close" type="button"
                                    value="OK">OK
                            </button>
                        </div>
                        <div className="calendar__select-date" data-select-date="data-select-date">
                            <button className="calendar__prev-select-date" type="button"
                                    data-select-date-prev="data-select-date-prev">
                            </button>
                            <div className="calendar__output-selected-date"
                                 data-output-selected-date="data-output-selected-date" tabIndex={0}>
                            </div>
                            <button className="calendar__next-select-date" type="button"
                                    data-select-date-next="data-select-date-next">
                            </button>
                        </div>
                        <div className="calendar__table-wrap"
                             data-table-calendar-wrap="data-table-calendar-wrap">
                            <table className="calendar__table">
                                <thead>
                                <tr className="calendar__table-row">
                                    <th className="calendar__table-head-cell">Пн</th>
                                    <th className="calendar__table-head-cell">Вт</th>
                                    <th className="calendar__table-head-cell">Ср</th>
                                    <th className="calendar__table-head-cell">Чт</th>
                                    <th className="calendar__table-head-cell">Пт</th>
                                    <th className="calendar__table-head-cell">Сб</th>
                                    <th className="calendar__table-head-cell">Вс</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="calendar__table-row">
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                </tr>
                                <tr className="calendar__table-row">
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                </tr>
                                <tr className="calendar__table-row">
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                </tr>
                                <tr className="calendar__table-row">
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                </tr>
                                <tr className="calendar__table-row">
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                </tr>
                                <tr className="calendar__table-row">
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                    <td className="calendar__table-cell" data-date-cell="data-date-cell"
                                        tabIndex={0}>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="calendar__select-time">
                            <span>Время c</span>
                            <div className="calendar__input-time-wrap">
                                <input
                                    className="calendar__select-time-input" type="number" name="time_from"
                                    maxLength={2} data-working-hours={8-20}
                                    data-notification-calendar="{&quot;text&quot;:&quot;Вы выбрали нерабочие
                                                часы! Мы работаем с 08:00 до 20:00. Заявка может быть перенесена на
                                                другое время&quot;,
                                                &quot;className&quot;:&quot;calendar-notification-warning&quot;}"
                                    data-hours="from" placeholder="08"
                                />
                                <span>:</span>
                                <input
                                    className="calendar__select-time-input" type="number" name="time_from"
                                    data-minutes="from" placeholder="00"
                                />
                            </div>
                            <span>до</span>
                            <div className="calendar__input-time-wrap">
                                <input
                                    className="calendar__select-time-input" type="number" name="time_to"
                                    data-working-hours="8-20"
                                    data-notification-calendar="{&quot;text&quot;:&quot;Вы выбрали нерабочие часы! Мы работаем с 08:00 до 20:00. Заявка может быть перенесена на другое время&quot;, &quot;className&quot;:&quot;calendar-notification-warning&quot;}"
                                    data-hours="to" placeholder="18"
                                />
                                <span>:</span>
                                <input
                                    className="calendar__select-time-input" type="number" name="time_to"
                                    data-minutes="to" placeholder="00"
                                />
                            </div>
                        </div>
                        <div className="calendar__input-save-wrap">
                            <input className="calendar__btn-save-date" type="button" value="готово"/>
                        </div>
                    </div>
                </div>
                <div className="order-delivery__submit-wrap">
                    <button
                        className="button-inpute-type-a order-delivery__btn-submit" id="order-delivery"
                        type="submit">
                        заказать
                    </button>
                </div>
                <div className="order-delivery__pop-up-result">
                    <div className="order-delivery__preloader">
                        <div className="order-delivery__preloader-icon"></div>
                        <div className="order-delivery__text-send">заявка отправляется...</div>
                    </div>
                </div>
            </div>
        </form>
    )
}