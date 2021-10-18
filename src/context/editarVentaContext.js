import { createContext, useContext } from "react";

export const EditarVentaContext = createContext(null);

export const useEditarVentaContext = () => {
    return useContext(EditarVentaContext);
};
