import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
      <div className={styles.preview}>
        <img
            src="https://cdn.dribbble.com/userupload/4058174/file/original-9c8209b71f6f859d6e4dc11150c00699.png?compress=1&resize=400x300&vertical=top"
            alt="preview"
            className={styles.previewImg}
        />
      </div>
  );
}
