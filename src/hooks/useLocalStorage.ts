import React from 'react';

const useLocalStorage = () => {
    const setLocalStorage = (name, data) => {
        localStorage.setItem(name, JSON.stringify(data));
    };
    const getLocalStorage = (name) => {
        const getLocalStorage = localStorage.getItem(name);
        return JSON.parse(getLocalStorage);
    };

    const removeLocalStorage = (name) => localStorage.removeItem(name);

    return { setLocalStorage, getLocalStorage, removeLocalStorage };
};

export default useLocalStorage;
