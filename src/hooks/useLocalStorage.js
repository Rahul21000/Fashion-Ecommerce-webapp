import { useEffect, useState } from "react";

const PREFIX = "ecommerce";
const KEY = "cart";
const useLocalStorage = () => {
  const prefixedkey = KEY;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedkey);
    if (jsonValue !== null) {
      return jsonValue !== "undefined"
        ? JSON.parse(localStorage.getItem(prefixedkey))
        : [];
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem(prefixedkey, JSON.stringify(localCart));
  }, []);

  return [localCart, setLocalCart];
};

export default useLocalStorage;
