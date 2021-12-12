import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router'


function App() {
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
        <Router ativaCor={ativaCor}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
