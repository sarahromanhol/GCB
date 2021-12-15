import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Router from './routes/Router'




function App() {

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
      <BrowserRouter>
        <Router ativaCor={ativaCor} />
      </BrowserRouter>
  );
}

export default App;
