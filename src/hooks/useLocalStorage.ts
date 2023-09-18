import { useState, useEffect } from 'react';

export default function useLocalStorage(key: string, defaultValue = {}) {
  const [value, setValue] = useState<any>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  })

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        if (e.newValue) setValue(JSON.parse(e.newValue));
      }
    }
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    }
  }, [key, defaultValue])

  const setValueInLocalStorage = (newValue: any) => {
    setValue((currValue: any) => {
      const result = typeof newValue === 'function' ? newValue(currValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    })
  }

  return {
    value,
    setValueInLocalStorage,
  }
}
