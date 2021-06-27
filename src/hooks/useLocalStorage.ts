import React from 'react';

export default function useLocalStorage() {
    function setLocalStorage(name, data) {
        return localStorage.setItem(name, JSON.stringify(data));
    }
    function getLocalStorage(name) {
        const getLocalStorage = localStorage.getItem(name);
        return JSON.parse(getLocalStorage);
    }

    function removeLocalStorage(name) {
        return localStorage.removeItem(name);
    }

    return { setLocalStorage, getLocalStorage, removeLocalStorage };
}
