import React from 'react';
import styles from './textarea.scss'

export const TextareaCustom = () => {
    return (
        <div className={styles.wrap}>
            <textarea
                className={`${styles.field} scroll-vertical-small`}
                name="comment" placeholder="Комментарий к заявке..."
                data-for="comments">
            </textarea>
        </div>
    )
}