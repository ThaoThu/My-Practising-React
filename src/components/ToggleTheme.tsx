import { Button, Fab } from '@material-ui/core'
import React, { useContext } from 'react'
import {createStyles,makeStyles} from '@material-ui/core/styles'
import { ThemeContext } from '../context/ThemeContext'
const useStyles = makeStyles(()=>
createStyles({
  floatBtn : {
position: 'fixed',
right:'3rem',
bottom: '3rem'
  }
})
)
export default function ToggleTheme() {
  const classes = useStyles()
  let {toggleTheme, theme} = useContext(ThemeContext)
  return (
    <Fab  color = 'primary' variant = 'extended' className = {classes.floatBtn}>
     <Button onClick = {()=> theme === 'primary' ?toggleTheme('secondary') : toggleTheme('primary')}>
       Toggle theme
       </Button> 
    </Fab>
  )
}
