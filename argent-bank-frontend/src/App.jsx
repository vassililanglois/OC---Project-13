import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Header from "./layouts/Header";
import Router from "./Router";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Router />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
