import { createContext, useContext } from "react";
import { Store } from "./store";
import store from "./store";

const StoreContext = createContext<Store>(store);
export const StoreProvider = StoreContext.Provider;

export const useStore = () => {
  const store = useContext(StoreContext);
  return store;
};
