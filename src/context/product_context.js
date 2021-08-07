import { createContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
         const [state, dispatch] = useReducer(reducer, initialState);
         
}