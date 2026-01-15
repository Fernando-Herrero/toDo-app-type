import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary.jsx";
import { PageError } from "@/components/ErrorBoundary/PageError.jsx";
import { AuthProvider } from "@/context/AuthContext.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import "./index.css";
import "./translations/i18n.js";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ErrorBoundary
            fallback={
                <PageError
                    title="Ups… algo no funcionó"
                    message="Esto no debería haber pasado…Por favor, recarga la página para continuar."
                    onRetry={() => window.location.reload()}
                    retryText="Recargar página"
                    fullPage
                />
            }
        >
            <BrowserRouter>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>
);
