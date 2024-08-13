import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/themeContext";
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <App />
                <Toaster />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
