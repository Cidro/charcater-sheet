const Storage = {
    has(key) {
        return window.localStorage.getItem(key) != null;
    },
    remove(key) {
        window.localStorage.removeItem(key);
    },
    get(key, def) {
        var storageData = window.localStorage.getItem(key);
        if (storageData !== null) {
            return JSON.parse(storageData);
        }
        return def || null;
    },
    set(key, value) {
        if (value instanceof Object || value instanceof Array) {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
    },
    clear() {
        window.localStorage.clear();
    }
};
export default Storage;
