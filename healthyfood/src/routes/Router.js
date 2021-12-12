import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../components/Header/Header';
import { LandingPage } from '../pages/LandingPage/LandingPage'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';


const Router = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
                <Route element={<div>Página não encontrada</div>} />
            </Routes>
        </div>

    );
};

export default Router;