import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//For production comment below 4
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
);
