// import { PropTypes } from "@material-ui/core";
// import { createContext, ReactNode, useState } from "react";

import { createContext, ReactNode, useState } from "react";

// interface ContextProps {
//   children : ReactNode
// }
// const defaultValue = {
//   theme : 'primary' as PropTypes.Color,
//   toggleTheme: (theme:PropTypes.Color) => {}
// }
// export const ThemeContext = createContext(defaultValue)
// const ThemeContextProvider = ({children}: ContextProps) =>{
//   const [theme, setTheme] = useState<PropTypes.Color>(defaultValue.theme)

//   const toggleTheme = (theme:PropTypes.Color) =>{
//     setTheme(theme)
//   }

//   let themeDynamic = {theme,toggleTheme}
//   return <ThemeContext.Provider value = {themeDynamic}>
//     {children}
//   </ThemeContext.Provider>
// }
// export default ThemeContextProvider
interface Movie  {
  id: string,
  title : string
} 
interface ContextData {
  movies : Movie[],
  addMovie: (title:string) => void,
  deleteMovie: (title:string) => void,

}
let defaultData = {
  movies : [],
  addMovie : () => {},
  deleteMovie : () => {},

}

export const MovieContext = createContext<ContextData>(defaultData)

interface MovieContextProps {
  children: ReactNode
}

const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [movies, setMovies] = useState<Movie[]>(defaultData.movies)
  const addMovie = (title: string) => {
    let id = ((Math.random()) + 1000).toString()
    setMovies([...movies, { title, id }])
  }
  const deleteMovie = (id: string) => {
  
    setMovies(movies.filter(item=>item.id!== id))
  }

  let movieValue = { movies, addMovie, deleteMovie }
  return <MovieContext.Provider value={movieValue}>
    {children}
  </MovieContext.Provider>
}

export default MovieContextProvider