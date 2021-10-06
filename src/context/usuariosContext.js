import { createContext, useContext } from 'react';

export const UsuariosContext = createContext(null);

export const useUsuariosContext = () => {
    return useContext(UsuariosContext);
}