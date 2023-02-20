import { createContext, ReactNode, useState } from "react";
import { LoginData } from "../../pages/Login";

interface AuthContextData {
  isLoading: boolean;
  token: boolean;
  handleAuthLogin: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(false);

  async function handleAuthLogin(email: string, password: string) {
    try {
      setToken(true);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        token,
        handleAuthLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
