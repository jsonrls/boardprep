import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadCurrentRoute } from "./routes/ClientAppRoutes";
import "./index.css";

const root = document.getElementById("root")!;

const mount = () => {
  if (root.hasChildNodes()) {
    hydrateRoot(root, <App />);
  } else {
    createRoot(root).render(<App />);
  }
};

preloadCurrentRoute(window.location.pathname).then(mount, mount);
