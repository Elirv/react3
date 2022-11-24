import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routes/AppRouter";


function App() {
  return (
    <>
      <BrowserRouter>
          <UserProvider>
            <Header />
            <AppRouter />
            <Footer />
          </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
