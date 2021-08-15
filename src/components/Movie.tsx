import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MoviesContext'
import { ThemeContext } from '../context/ThemeContext'

export default function Movie() {
  const [input, setInput] = useState('')
  let { movies, addMovie, deleteMovie } = useContext(MovieContext)
  let { theme } = useContext(ThemeContext)
  const chipColor = theme as Exclude<PropTypes.Color, 'inherit'>
  let handleAdd = () => {
    addMovie(input)
    setInput('')
  }
  return (
    <>
      <Box alignItems='center' justifyContent='center' display='flex' mt='10px'>

        <TextField name='search' onChange={(e) => setInput(e.target.value)} value={input} />
        <Button color='primary' variant='outlined' onClick={handleAdd}>Add</Button>

      </Box>
      <Box padding='5px' alignItems='center' justifyContent='center' display='flex'>

        {
          movies.map(item => {
            return <Chip label={item.title} key={item.id} color={chipColor} onDelete={() => deleteMovie(item.id)}></Chip>
          })
        }

      </Box>
    </>

  )
}
