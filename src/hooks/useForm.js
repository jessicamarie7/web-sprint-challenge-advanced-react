import { useLocalStorage } from './useLocalStorage';

export const useForm = (initialValue) => {
    const [value, setValue] = useLocalStorage('form', initialValue);
    return [value, setValue];
}