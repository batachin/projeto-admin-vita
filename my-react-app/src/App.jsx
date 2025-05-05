import BarraLateral from "./components/barra-lateral";
import Cabecalho from "./components/cabecalho";
import Conteiner from "./components/conteiner";
import Announcements from "./components/announcements";

import "./styles.css";

function App() {
  return (
    <>
        <BarraLateral />
        <Cabecalho />
        <Conteiner />
        <Announcements />
    </>
  );
}

export default App;
