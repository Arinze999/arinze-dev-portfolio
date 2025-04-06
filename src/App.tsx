import './App.css';
import ModalContainer from './components/modal/ModalContainer';
import About from './layout/About';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Hero from './layout/Hero';
import Projects from './layout/Projects';
import Stack from './layout/Stack';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stack />
      <About />
      <Projects />
      <Footer />
      <ModalContainer/>
    </>
  );
}

export default App;
