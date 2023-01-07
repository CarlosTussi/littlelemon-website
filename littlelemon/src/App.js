import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SideMenuProvider from './context/SideMenuProvider';

function App() {
  return (
    <>
        <SideMenuProvider>
          <Header/>
          <Main />
          <Footer />
        </SideMenuProvider>
    </>
  );
}

export default App;
