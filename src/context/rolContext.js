import { createContext, useContext } from "react";

export const RolContext = createContext(null);

export const useRolContext = () => {
  return useContext(RolContext);
};
