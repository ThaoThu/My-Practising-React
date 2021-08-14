import { AppBar, Box,Theme,  FormControl, MenuItem, Select, Toolbar, Typography, Button, Chip, PropTypes } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'

import WelcomeMsg from './WelcomeMsg'
import {createStyles,makeStyles} from '@material-ui/core/styles'
import { ProgressContext } from '../context/ProgressContext'
import { ThemeContext } from '../context/ThemeContext'

const useStyles = makeStyles((theme:Theme)=>
  createStyles({
    positionSelect : {
      color : '#fff',
      borderBottom : '1px solid #fff'
    }
  })
)

export default function NavBar() {
  const classes = useStyles()

  const {status,lastTime} = useContext(ProgressContext)
  const {theme} = useContext(ThemeContext)


  const [position, setPosition] = useState('FE dev')
  const [date, setDate] = useState(()=>new Date(Date.now()))

useEffect(() => {
  const timer = setInterval(()=>{

    setDate(new Date(Date.now()))

    return ()=>{
      clearInterval(timer)
    }
  },1000)

}, [])
  let handleChangePosition =(e :React.ChangeEvent<{
    value: unknown;
}>) =>{
    setPosition(e.target.value as string)
  }
  return (
    <AppBar position='static' color={theme}>
      <Toolbar>
        <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2}>
          <Typography variant='h6' >My movies</Typography>
          <Box alignItems='center'>
            <WelcomeMsg position={position} country='USA' />
            <Chip label = {`Last time working on ${lastTime} this project : ${status}`}></Chip>
            <Box mt={1}>
              <FormControl>
                <Select className = {classes.positionSelect} value = {position} onChange = {handleChangePosition}>
                  <MenuItem value = 'fullstack'>Fullstack</MenuItem>
                  <MenuItem value = 'fe'>FE</MenuItem>

                  <MenuItem value = 'be'>BE</MenuItem>

                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box my={1}>
              <Typography  variant='h6'>{date.toUTCString()}</Typography>
            </Box>
            <Button variant = 'contained'>Login</Button>
          </Box>
        </Box>
      </Toolbar>

    </AppBar>
  )
}
