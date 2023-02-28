import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api/axios";

interface AuthContextData {
  handleAuthLogin: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);

  async function handleAuthLogin(email: string, password: string) {}
  return (
    <AuthContext.Provider
      value={{
        handleAuthLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
