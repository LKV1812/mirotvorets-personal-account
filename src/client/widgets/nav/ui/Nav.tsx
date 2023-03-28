import React from 'react';
import styles from './nav.scss';

import {BtnDelivery, BtnCommunicate, BtnHistory, BtnSettings, BtnMore} from '../../../shared';

export function Nav() {
  return (
      <div className={styles.container} id="menuUser">
          <BtnDelivery />
          <BtnCommunicate />
          <BtnHistory />
          <BtnSettings />
          <BtnMore />
      </div>
  );
}
