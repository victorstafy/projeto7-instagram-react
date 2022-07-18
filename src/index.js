import ReactDOM from "react-dom";

import Header from "./components/Header";
import Conteudo from "./components/Conteudo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
