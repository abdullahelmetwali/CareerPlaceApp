import { AppContextType } from "@/interfaces/Types";
import { createContext, useState } from "react"

export const AppContext = createContext<AppContextType>({
    globalUsr: 'Guest-777',
    setGlobalUsr: () => { }
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [globalUsr, setGlobalUsr] = useState('Guest-777');
    return (
        <AppContext.Provider value={{ globalUsr, setGlobalUsr }}>
            {children}
        </AppContext.Provider>
    )
}