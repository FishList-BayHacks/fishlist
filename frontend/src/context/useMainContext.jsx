import { Context } from "./Context"; // Adjust the import path as needed
import { useContext } from "react";

// Custom hook for accessing the context
export const useMainContext = () => useContext(Context);
