import { Switch } from '@mui/material'
import React from 'react'
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function DarkMode() {
  return (
    <div>
        <h2>Mode</h2>
        <Switch {...label}/>
    </div>
  )
}

export default DarkMode