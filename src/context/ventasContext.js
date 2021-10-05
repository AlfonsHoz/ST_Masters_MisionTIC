import { createContext, useContext } from 'react';

export const VentasContext = createContext(null);

export const useVentasContext = () => {
    return useContext(VentasContext);
}