import "./styles/style.css";

import Header from "./components/Header";
import Main from "./components/Main";
import MainInfo from "./components/MainInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <MainInfo />
      </main>
      <Footer />
    </>
  );
};

export default App;
