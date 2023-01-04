import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
        <Header/>
        <Main />
        <Footer />
    </>
  );
}

export default App;
