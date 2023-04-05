import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import characters from "./characters.json";

import App from "./App";

export const getCharacters = async () => {
  return characters;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
