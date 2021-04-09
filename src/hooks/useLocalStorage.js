import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.stringify(item) : initialValue;
    });
    const setValue = (value) => {
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    }
    return [storedValue, setValue];
}