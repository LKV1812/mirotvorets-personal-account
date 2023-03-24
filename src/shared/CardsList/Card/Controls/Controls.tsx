import React from 'react';
import styles from './controls.css';
import {Karma} from "./Karma";
import {Comments} from "./Comments";
import {Actions} from "./Actions";

export function Controls() {
  return (
    <div className={styles.controls}>
      <Karma />
      <Comments />
      <Actions />
    </div>
  );
}
