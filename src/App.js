import "./App.scss";
import "../src/styles/index.scss";
import NavBar from "./layout/navigation/NavBar";
import Head from "./pages/head/Head";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <NavBar />
      <Head />
      <About />
    </>
  );
}

export default App;
