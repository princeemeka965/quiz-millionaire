import { createContext, useContext, useState } from "react";

// Define the authentication context type
export interface AuthContextType {
  user: string;
  proceed: boolean;
  quizData: {}[];
  login: (value: string) => void;
  handleProceed: () => void;
  saveQuizQuestions: (data: {}[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string>("");
  const [proceed, setProceed] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<{}[]>([]);

  const login = (value: string) => {
    setUser(value);
  };

  const handleProceed = (): void => {
    setProceed(true);
  };

  const saveQuizQuestions = (data: {}[]): void => {
    setQuizData(data);
  };

  const contextValue: AuthContextType = {
    user,
    login,
    handleProceed,
    proceed,
    quizData,
    saveQuizQuestions,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
