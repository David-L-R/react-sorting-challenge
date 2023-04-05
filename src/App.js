import "./styles.css";
import { getCharacters } from "./index.js";
import { useEffect } from "react";

export default function App() {
  console.log(getCharacters());
  return <div className="App">hello</div>;
}
