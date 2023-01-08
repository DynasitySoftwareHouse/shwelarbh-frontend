import "./App.css";
import Router from "./components/routes/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Error from "./components/Error/Error";

function App() {
  const { VITE_APP_NAME } = import.meta.env;
  console.log(`${VITE_APP_NAME} website is running  `)
  return VITE_APP_NAME === "shwelarbh" ? (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <div className="App">
          <Router></Router>
        </div>
      </BrowserRouter>
    </StyledEngineProvider>
  ) : (
    <Error></Error>
  );
}

export default App;
