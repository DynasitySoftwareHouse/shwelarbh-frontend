import "./App.css";
import Router from "./components/routes/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <div className="App">
          <Router></Router>
        </div>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
