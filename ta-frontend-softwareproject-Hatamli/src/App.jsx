import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes/router";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Silverbin</title>
      </Helmet>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
