import { PropTypes } from "@material-ui/core";
import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  children : ReactNode
}
const defaultValue = {
  theme : 'primary' as PropTypes.Color,
  toggleTheme: (theme:PropTypes.Color) => {}
}
export const ThemeContext = createContext(defaultValue)
const ThemeContextProvider = ({children}: ContextProps) =>{
  const [theme, setTheme] = useState<PropTypes.Color>(defaultValue.theme)

  const toggleTheme = (theme:PropTypes.Color) =>{
    setTheme(theme)
  }

  let themeDynamic = {theme,toggleTheme}
  return <ThemeContext.Provider value = {themeDynamic}>
    {children}
  </ThemeContext.Provider>
}
export default ThemeContextProvider