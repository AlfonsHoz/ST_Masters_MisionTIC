import { createContext, useContext } from 'react';

export const ConsultarVentaContext = createContext(null);

export const useConsultarVentaContext = () => {
    return useContext(ConsultarVentaContext);
}