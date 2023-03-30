import React from 'react';
import styles from './btn-submit.scss'

interface IButton {
    id: string,
    title: string
}

export const SubmitButton = (props: IButton) => (
    <button
        className={styles.item} id={props.id}
        type="submit">{props.title}
    </button>
)