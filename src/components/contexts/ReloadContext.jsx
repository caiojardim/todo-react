import { createContext, useState, ReactNode, useContext } from 'react'

export const ReloadContext = createContext({})

export function ReloadContextProvider ({ children }) {
    const [isReaload, setIsReaload] = useState(false);
  
    function toggleReload() {
      setIsReaload(!isReaload);
    }

  
    return ( 
        <ReloadContext.Provider 
            value={{
                isReaload,
                toggleReload,
            }}
        >
            {children}
        </ReloadContext.Provider>
    )
}

export const useReload = () => {
    return useContext(ReloadContext)
}