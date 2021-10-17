import { createContext, useContext } from 'react';

export const ConsultarUsuarioContext = createContext(null);

export const useConsultarUsuarioContext = () => {
    return useContext(ConsultarUsuarioContext);
}