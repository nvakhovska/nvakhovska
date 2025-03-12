import { useContext } from "react";
import { ToastContainer } from "react-toastify";

// Styles
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { ThemeContext } from "./contexts/theme";

// Components
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Skills from "./components/Skills/Skills";
// import Training from "./components/Training/Training";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        {/* <Training /> */}
        <Experience />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
      <ToastContainer theme={themeName} />
    </div>
  );
};
export default App;
