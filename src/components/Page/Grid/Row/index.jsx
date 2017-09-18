// Row
import React from 'react';
import Cell from './Cell'
import styles from './style.css'

const Row = (props) => {
  console.log('Row: props', props)
  const renderCols = props.cols.map((c, index) => (
      <Cell
        key={index}
        value={c}
      />
    ))
  return (
    <div className={styles.row}>
      {renderCols}
    </div>
  )
}

export default Row
