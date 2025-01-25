import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function useLocalStorage<T>(storageKey: string, initialValue: T) {
  const storedItem = localStorage.getItem(storageKey);

  const item = storedItem === null ? initialValue : JSON.parse(storedItem);
  const [value, setValue] = useState<T>(item);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue] satisfies [T, Dispatch<SetStateAction<T>>];
}

export default useLocalStorage;
