import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { LandingPage } from '../pages/LandingPage/LandingPage'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';


const Router = ({ativaCor}) => {
    return (
        <div>
            <Header ativaCor={ativaCor}/>
            <Routes>
                <Route id='1' exact path="/" element={<LandingPage />} />
                <Route id='2' exact path="/register" element={<RegisterPage />} />
                <Route element={<div>Página não encontrada</div>} />
            </Routes>
            <Footer />
        </div>

    );
};

export default Router;