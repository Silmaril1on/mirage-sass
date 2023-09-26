import "./App.scss";
import "../src/styles/index.scss";
import NavBar from "./layout/navigation/NavBar";
import Head from "./pages/head/Head";
import About from "./pages/about/About";
import Deluxe from "./pages/deluxe/Deluxe";

function App() {
  return (
    <>
      <NavBar />
      <Head />
      <About />
      <Deluxe />
    </>
  );
}

export default App;
