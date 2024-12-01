import { useCallback, useState } from "react";
import { Books } from "../../services/interfaceBooks";


const useStorage = () => {
    const [localStorageData, setLocalStorageData] = useState<Books[]>([])

  const saveLocalStorage = useCallback((key: string, value: Books[]) => {
    try {
      const stringifiedValue = JSON.stringify(value);
      localStorage.setItem(key, stringifiedValue);
      setLocalStorageData(value)
    } catch (error) {
      console.error("Erro ao salvar no localStorage", error);
    }
  },[]);

  const getFromLocalStorage = useCallback((key: string) => {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        const parsedData = JSON.parse(data);
        setLocalStorageData(parsedData)
        return parsedData;
      }
      return [];
    } catch (error) {
      console.error("Erro ao obter do localStorage:", error);
      return [];
    }
  },[]);

  return {
    localStorageData,
    saveLocalStorage,
    getFromLocalStorage,
  };
};

export default useStorage;
