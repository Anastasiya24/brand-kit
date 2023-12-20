import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  const updateData = (newData) => {
    setImage(newData);
  };

  return (
    <AppContext.Provider value={{ image, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
