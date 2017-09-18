// Page
import React from 'react';
import styles from './style.css'
import { rows } from './grid-data'
import Row from './Row'

const Grid = () => {
  console.log('Grid: rows', rows)
  const renderRows = rows.map((r, index) => (
    <Row
      key={index}
      cols={r}
    />
  ))
  return (
    <div>
      <h1>Hello from Grid component</h1>
      {renderRows}
    </div>
  )
}

export default Grid
