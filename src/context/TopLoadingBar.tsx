import { createContext, useContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";

interface LoadingProps {
  progress: number;
  increament: (data: number) => void;
  reset: () => void;
}

const LoadingContext = createContext<LoadingProps | undefined>(undefined);

export function LoadingProvider({ children }: any) {
  const [progress, setProgress] = useState<number>(0);

  const increament = (data: number): void => {
    setProgress((prevCounter) => prevCounter + data);
  };

  const reset = (): void => {
    setProgress(0);
  };

  return (
    <LoadingContext.Provider value={{ progress, increament, reset }}>
      <LoadingBar color={"red"} height={5} shadow={true} progress={progress} />
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoadingContext);
}
