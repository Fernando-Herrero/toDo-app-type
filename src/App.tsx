import { LoginPage } from "@/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

export const App = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    );
};
