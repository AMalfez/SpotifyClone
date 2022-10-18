import React, {createContext, useContext, useReducer} from 'react'
export const DataLayerContext = createContext();

export const DataLayer = ({children, initialState, redeucer})=>{    
    <DataLayerContext.Provider value={useReducer(initialState, redeucer)}>
        {children}
    </DataLayerContext.Provider>
}

export const useDataLayerValue = ()=>useContext(DataLayer);


