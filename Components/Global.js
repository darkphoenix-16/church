import { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [userUID, setUserUID] = useState("UzfTWO40EkfFv6AUQAPskWgQraV2");
    const [userInfo, setUserInfo] = useState({firstname:"", lastname:"",});



    return (
        <AppContext.Provider
            value={{
                userUID, setUserUID,
                userInfo, setUserInfo,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

