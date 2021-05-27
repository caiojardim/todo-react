import { createContext, useState, ReactNode, useContext } from 'react'

export const ReloadContext = createContext({})

export function ReloadContextProvider ({ children }) {
    const [isReload, setIsReload] = useState(true);
  
    function toggleReload() {
      setIsReload(!isReload);
    }

  
    return ( 
        <ReloadContext.Provider 
            value={{
                isReload,
                toggleReload,
                setIsReload
            }}
        >
            {children}
        </ReloadContext.Provider>
    )
}

export const useReload = () => {
    return useContext(ReloadContext)
}