import { createContext, useContext, useState } from "react";

// Define the authentication context type
export interface AuthContextType {
  user: string;
  proceed: boolean;
  login: (value: string) => void;
  handleProceed: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string>("");
  const [proceed, setProceed] = useState<boolean>(false);

  const login = (value: string) => {
    setUser(value);
  };

  const handleProceed = () => {
    setProceed(true);
  };

  const contextValue: AuthContextType = {
    user,
    login,
    handleProceed,
    proceed,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
