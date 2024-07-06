import { localStorageKey, userStorageKey } from "../configs/default";
import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Define the context type
interface AuthContextType {
  state: string | null | undefined;
  setState: Dispatch<SetStateAction<string | null | undefined>>;
}

const Context = createContext<AuthContextType | null>(null);
export const setToken = (token: any) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(localStorageKey, token);
  }
};
export const setUser = (user: any) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(userStorageKey, JSON.stringify(user));
  }
};
export const getToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(localStorageKey);
  }
};
export const getUser = () => {
  if (typeof window !== "undefined") {
    const user = window.localStorage.getItem(userStorageKey);
    return user ? JSON.parse(user) : null;
  }
};
export const removeToken = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(localStorageKey);
  }
};

export const logOut = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(localStorageKey);
    window.localStorage.removeItem(userStorageKey);
  }
};

function Provider({ children }: any) {
  const [state, setState] = useState(getToken());
  useEffect(() => {
    if (state) {
      setToken(state);
    } else {
      removeToken();
    }
  }, [state]);
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
