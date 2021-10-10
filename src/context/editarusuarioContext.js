import { createContext, useContext } from "react";

export const UsuariosEditarContext = createContext(null);

export const useUsuariosEditarContext = () => {
  return useContext(UsuariosEditarContext);
};
