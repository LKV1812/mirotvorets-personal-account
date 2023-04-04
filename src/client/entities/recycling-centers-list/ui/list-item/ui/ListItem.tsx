import React from 'react'
import {DelimiterIcon} from '../../../../../shared';
import styles from './list.scss'

interface IListItem {
    title: string
}

export const ListItem = (props: IListItem) => (
    <li className={styles.item}>
        <a className={styles.link} href="#" data-shouses='${JSON.stringify(data)}'>
            <div className={styles.iconWrap}>
                <DelimiterIcon />
            </div>
            <div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.info}></div>
            </div>
        </a>
    </li>

)