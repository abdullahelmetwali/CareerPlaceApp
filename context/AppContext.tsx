import { AppContextType } from "@/interfaces/Types";
import { createContext, useState } from "react"

export const AppContext = createContext<AppContextType>({
    globalUsr: {
        usr: 'Guest-777',
        isThereIsUsr: false
    },
    setGlobalUsr: () => { }
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [globalUsr, setGlobalUsr] = useState({
        usr: 'Guest-777',
        isThereIsUsr: false
    });
    return (
        <AppContext.Provider value={{ globalUsr, setGlobalUsr }}>
            {children}
        </AppContext.Provider>
    )
}