import React, {createContext, useReducer} from 'react'; 
import AppReducer from './Appreducer';

//initial state
const initialState = {
    transactions:  []
}

//create context
export const GlobalContext = createContext(initialState);  

//Provider Component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
    function deleteTransactions(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
        
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
        
    }

    return (
        <GlobalContext.Provider value = {{
             transactions: state.transactions,
             deleteTransactions,
             addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

