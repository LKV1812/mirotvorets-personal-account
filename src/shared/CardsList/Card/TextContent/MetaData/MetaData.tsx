import React from 'react';
import styles from './metadata.css';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <img
        src="https://cdn.dribbble.com/users/759083/screenshots/16289692/media/74713ebbab5f471b2977f81276cb4319.jpg?compress=1&resize=400x300&vertical=top"
        alt="avatar"
        className={styles.avatar}
      />
      <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад
      </span>
    </div>
  );
}
