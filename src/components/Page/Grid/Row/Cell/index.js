// Cell
import React from 'react';
import styles from './style.css'

const Cell = (props) => {

  return (
    <div className={styles.cell}>{props.value}</div>
  )
}

export default Cell
