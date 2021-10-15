import { createContext, useContext } from "react";

export const RegistrarVentaContext = createContext(null);

export const useRegistrarVentaContext = () => {
    return useContext(RegistrarVentaContext);
};
