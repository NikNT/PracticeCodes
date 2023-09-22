import { createContext, useReducer } from "react";
import { noteReducer } from "./Reducer";

export const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, {
    notes: null,
  });

  return (
    <NoteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
