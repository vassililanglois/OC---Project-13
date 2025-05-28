import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import Router from "./router";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
