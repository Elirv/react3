import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AppRouter } from "./routes/AppRouter";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
