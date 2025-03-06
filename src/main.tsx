import App from "./App";
import "./styles/global.css";
import "./styles/index.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(<App />);
