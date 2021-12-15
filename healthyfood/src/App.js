import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Router from './routes/Router'




function App() {

  // configuração da cor do footer
  const [coloreFooter, setColoreFooter] = useState(false)

  useEffect(() => {
    const preenchendoFooter = () => {
      if (Router.Route.id === 2) {
        setColoreFooter(true)
      } else {
        setColoreFooter(false)
      }
    }
  }, [])


  // configuração de scroll do header
  const [ativaCor, setAtivaCor] = useState(false)

  useEffect(() => {
    const posicaoScroll = () => {
      if(window.scrollY > 80){
        setAtivaCor(true)
      } else {
        setAtivaCor(false)
      }
    }

    window.addEventListener('scroll', posicaoScroll)
  }, [])





  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router ativaCor={ativaCor}  coloreFooter={coloreFooter} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
