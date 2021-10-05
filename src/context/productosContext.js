import { createContext, useContext } from 'react';

export const ProductosContext = createContext(null);

export const useProductosContext = () => {
    return useContext(ProductosContext);
}