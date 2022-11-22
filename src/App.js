import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AuthProvider } from "./context/AuthProvider";
import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routes/AppRouter";


function App() {
  return (
    <>
        <BrowserRouter>
      {/* <AuthProvider> */}
      <UserProvider>
          <Header />
          <AppRouter />
          <Footer />
      </UserProvider>
        {/* </AuthProvider> */}
        </BrowserRouter>
    </>
  );
}

export default App;
