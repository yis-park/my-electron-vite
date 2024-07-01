import ReactDOM from "react-dom/client";
import "./index.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import App from "./pages/_app";

import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  // console.log(message);
});
