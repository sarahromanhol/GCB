import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router'


function App() {


  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
