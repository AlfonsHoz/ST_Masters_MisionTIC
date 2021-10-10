import { createContext, useContext } from 'react';

export const ConsultarProductoContext = createContext(null);

export const useConsultarProductoContext = () => {
    return useContext(ConsultarProductoContext);
}