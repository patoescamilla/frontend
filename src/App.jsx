import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {isLogged ? (
        <Home />
      ) : (
        <Login onLogin={() => setIsLogged(true)} />
      )}
    </>
  );
}

export default App;
