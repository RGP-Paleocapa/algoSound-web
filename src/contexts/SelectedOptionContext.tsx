import React, { createContext, useContext, useState, ReactNode } from "react";

// Create a context
type SelectedOptionContextType = {
  selectedOption: string | undefined;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const SelectedOptionContext = createContext<SelectedOptionContextType | undefined>(
  undefined
);

// Create a provider component to wrap your App
export const SelectedOptionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>("Option 1");

  return (
    <SelectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SelectedOptionContext.Provider>
  );
};

// Create a custom hook to access the selected option
export const useSelectedOption = () => {
  const context = useContext(SelectedOptionContext);
  if (!context) {
    throw new Error("useSelectedOption must be used within a SelectedOptionProvider");
  }
  return context;
};
