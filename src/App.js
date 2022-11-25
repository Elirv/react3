import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routes/AppRouter";


function App() {
  return (
    <>
      <BrowserRouter>
          <UserProvider>
            <AppRouter />
          </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
