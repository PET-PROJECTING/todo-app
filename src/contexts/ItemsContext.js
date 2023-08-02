import { createContext } from "react";
import { ItemGenerator } from "../utilities";

export const ItemsContext = createContext([
    new ItemGenerator(),
    new ItemGenerator(),
    new ItemGenerator(),
    new ItemGenerator(),
    new ItemGenerator(),
]);
