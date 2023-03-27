import React from 'react';
import {hot} from "react-hot-loader/root";
import './app.global.scss';
import {Nav} from "../widgets";

function AppComponent() {
    return (
        <div>
            <div className="stretch-content">
                <div className="container-height-screen">
                    <Nav />
                    <form className="order-delivery" id="orderDelivery" data-states-item-submenu="close"
                          data-for="form-order-account" data-action="/forms/orderDeliveryFromAccount">
                        <input type="hidden" name="form_type" value="order_delivery_user_account_form"
                               data-for="header-form"/>
                        <input type="hidden" name="form_title" value="Заявка из личного кабинета"
                               data-for="header-form"/>
                        <input type="hidden" name="admin_email" value="zayavka@mirotvorets72.com"
                               data-for="header-form"/>
                        <input type="hidden" name="captcha_token" data-captcha="captcha"
                               data-for="header-form"/>
                        <div className="order-delivery__content-wrapper animated-height-change">
                            <div className="order-delivery__input-wrap">
                                <label className="input order-delivery__label-input"
                                       htmlFor="inputAddress">
                                </label>
                                <input className="input order-delivery__input" id="inputAddress"
                                       type="text"
                                       name="address" data-required="required|minLength(5)"
                                       data-for="contacts"
                                       placeholder="Ваш адрес"/>
                            </div>
                            <div id="suggest-view-container"></div>
                            <div className="scroll-horizontal-invisible" id="saved-addresses"></div>
                            <div className="order-delivery__input-wrap">
                                <label className="input order-delivery__label-input"
                                       htmlFor="inputPhone">
                                </label>
                                <input className="tel-field input order-delivery__input" id="inputPhone"
                                       type="tel"
                                       name="phone" data-required="required|phone" data-for="contacts"
                                       placeholder="Ваш телефон"/>
                            </div>
                            <div className="scroll-horizontal-invisible" id="saved-phones"></div>
                            <div className="order-delivery__textarea-wrap">
                                <textarea className="order-delivery__textarea scroll-vertical-small"
                                          name="comment" placeholder="Комментарий к заявке..."
                                          data-for="comments">
                                </textarea>
                            </div>
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
                    <div className="map-wrap">
                        <button className="btn-remove-route" id="btn-remove-route" type="button">
                            <span className="btn-remove-route__icon">&#10006;</span>
                            <span className="btn-remove-route__text">Удалить маршрут</span>
                        </button>
                        <ul className="list-box__dropdown-menu">
                            <li className="list-box__title" id="list-box-head">
                                <button className="btn-hide-houses" id="btn-hide-houses" type="button"></button>
                                <div className="list-box-item__head-text">Пункты приема</div>
                                <button className="btn-store-houses" id="btn-store-houses" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                         height="48px">
                                        <path fill="#2E7D32"
                                              d="M42.534 23.788c1.612 3.586-1.367 7.132-2.766 7.16h-3.484l-5.233-9.287
                                              7.717-4.465 3.706 6.408L42.534 23.788 42.534 23.788zM24.097
                                              8.276l-1.943-2.262h-2.096c-1.688-.027-3.746.57-4.96 2.308l-.093.152-3.705
                                              6.41 7.719 4.467 5.599-9.152L24.097 8.276zM15.404
                                              39.903c-3.921-.397-5.635-4.405-4.967-5.652L12.016 31h11.561l-.578
                                              8.934h-7.412L15.404 39.903 15.404 39.903z"
                                        />
                                        <g>
                                            <path
                                                fill="#4CAF50" d="M39.467 30.896c1.063-.031 1.786-.666 2.688-1.972l-5.881
                                                9.902c-.423.94-1.002 1.094-1.608 1.035h-5.197l-.031 3.157-4.376-7.596
                                                4.405-7.685v3.157H39.467L39.467 30.896zM22.666 7.197C21.847 5.886 20.67
                                                6.015 20.3 6.015h10.813c1.033-.097 1.457.3 1.732.878l2.582 4.497
                                                2.731-1.579-4.375 7.626-8.839.033 2.703-1.58L22.666 7.197 22.666 7.197zM10.662
                                                33.782c-.515.913-.366 1.786.264
                                                3.045l-5.551-9.788c-.577-.854-.425-1.399-.093-1.916l2.613-4.495-2.732-1.611h8.781l4.467
                                                7.656-2.735-1.577L10.662 33.782 10.662 33.782z"
                                            />
                                        </g>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                        <div className="map-delivery" id="mapDelivery"></div>
                    </div>
                </div>
            </div>
            <div className="privacy-policy" id="privacyPolicy">
                <p>Мы собираем cookie, данные об IP-адресе и местоположении Пользователей. Оставаясь на сайте,
                    <a className="privacy-policy__link" href="/pages/privacy-policy-page" target="_BLANK">
                        вы соглашаетесь со сбором и обработкой персональных данных
                    </a>
                </p>
                <div className="privacy-policy__wrap-btn">
                    <input className="privacy-policy__button" type="button" value="понятно" id="acceptedPolicy"/></div>
            </div>
        </div>
    );
}

export const App = hot(AppComponent)