import React from 'react'
import styles from './view.module.css'
export default function View({children}) {
  return (
    <div className={styles.view}>
      {children}
    </div>
  )
}
