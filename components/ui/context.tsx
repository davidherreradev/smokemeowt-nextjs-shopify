import { createContext, FC, useContext, useState, useReducer, useMemo } from "react"

export interface StateModifiers {
    openSidebar: () => void
    closeSidebar: () => void
    openMobileNav: () => void
    closeMobileNav: () => void
}

export interface StateValues {
    isSidebarOpen: boolean
    isMobileNavOpen: boolean
}

const stateModifiers = {
    openSidebar: () => {},
    closeSidebar: () => {},
    openMobileNav: () => {},
    closeMobileNav: () => {}
}

const initialState = { 
    isSidebarOpen: false,
    isMobileNavOpen: false
}

type State = StateValues & StateModifiers

const UIContext = createContext<State>({
    ...stateModifiers,
    ...initialState
})

type Action =
    { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" | "OPEN_MOBILENAV" | "CLOSE_MOBILENAV" }

function uiReducer(state: StateValues, action: Action) {
    switch(action.type) {
        case "OPEN_SIDEBAR": {
            return {
                ...state,
                isMobileNavOpen: false,
                isSidebarOpen: true
            }
        }
        case "CLOSE_SIDEBAR": {
            return {
                ...state,
                isMobileNavOpen: false,
                isSidebarOpen: false
            }
        }
        case "OPEN_MOBILENAV": {
            return {
                ...state,
                isMobileNavOpen: true,
                isSidebarOpen: false
            }
        }
        case "CLOSE_MOBILENAV": {
            return {
                ...state,
                isMobileNavOpen: false,
                isSidebarOpen: false
            }
        }
    }
}

export const UIProvider: FC<{children: React.ReactNode}> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, initialState)

    const openSidebar = () => dispatch({type: "OPEN_SIDEBAR"})
    const closeSidebar = () => dispatch({type: "CLOSE_SIDEBAR"})
    const openMobileNav = () => dispatch({type: "OPEN_MOBILENAV"})
    const closeMobileNav = () => dispatch({type: "CLOSE_MOBILENAV"})

    const value = useMemo(() => {
        return {
            ...state,
            openSidebar,
            closeSidebar,
            openMobileNav,
            closeMobileNav
        }
    }, [state.isSidebarOpen, state.isMobileNavOpen])

    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext)
    return context
}