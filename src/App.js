import Header from "./components/Header/Header";
import Home from "./Page/Home/Home"
import StyledGlobal, { CorFundo } from "./styledGlobal";
import { useState } from "react";

function App() {
  const [trocarDePagina, setTrocarDePagina] = useState("0")

  const changePage = (change) => {
    setTrocaDePagina(change)
  }

  return (
    <>
    <CorFundo>
      <StyledGlobal/>

      {trocarDePagina === "0" ? (
        <Home Pagina={() => changePage("0")}/>
      ) : (
        <Detalhes Pagina={() => changePage("1")}/>
      )}

    </CorFundo>
    </>
  );
}

export default App;
