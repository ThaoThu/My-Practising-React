import React, { createContext, ReactNode } from 'react'
const defaultValue = {
  lastTime :'14/8/2021',
  status : 'Inprogress'
}
export const ProgressContext = createContext(defaultValue)

interface ProgressContextProviderProps {
  children : ReactNode
}

const ProgressContextProvider = ({children} : ProgressContextProviderProps) => {

  return <ProgressContext.Provider value = {defaultValue}>
    {children}
  </ProgressContext.Provider>
}

export default ProgressContextProvider